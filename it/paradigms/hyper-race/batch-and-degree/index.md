---
title: 'Regolare con :batch e :degree'
translations_gpt:
---

{% include menu.html %}

Sia `.hyper` sia `.race` accettano due avverbi che controllano *come* il lavoro viene diviso fra i thread: `:degree` e `:batch`. Raramente ti servono, ma sono ciò a cui ricorri quando stai regolando le prestazioni.

## `:degree` — quanti lavoratori

`:degree` stabilisce quanti thread lavoratori girano nello stesso momento:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Per impostazione predefinita il grado è vicino al numero di core della CPU della macchina — su una macchina a otto core è `7`, lasciando un core al programma principale. Alzarlo molto oltre il numero di core raramente aiuta, dato che non ci sono altri core su cui girare, e il coordinamento in più può persino rallentare le cose.

## `:batch` — quanti elementi per volta

`:batch` stabilisce quanti elementi ogni lavoratore prende in una volta prima di tornare a chiederne altri:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

Il lotto predefinito è `64`, e la dimensione è un compromesso:

* Un lotto **grande** significa meno avanti e indietro fra i lavoratori e lo schedulatore — meno sovraccarico, il che va bene quando ogni elemento costa più o meno lo stesso.
* Un lotto **piccolo** distribuisce il lavoro più uniformemente quando alcuni elementi sono molto più costosi di altri, così nessun singolo lavoratore resta impantanato con tutti quelli lenti — al prezzo di più coordinamento.

Puoi impostarli entrambi insieme, su `.race` come su `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Se sei curioso di sapere quali siano davvero i valori predefiniti, puoi sbirciarli attraverso le interiora di Rakudo. Nota che questo legge un attributo *privato*: non è un'interfaccia stabile, e i numeri dipendono dalla tua macchina:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Qui `batch` è il predefinito fisso `64`, mentre `degree` è `7` — uno in meno degli otto core di questa macchina.

</div>

## Restano comunque solo suggerimenti

Come `.hyper` e `.race` stessi, questi avverbi **richiedono** una particolare divisione invece di garantirla. Un compilatore è libero di onorarli, di aggiustarli o di ignorarli del tutto — quindi tratta `:batch` e `:degree` come manopole da provare quando regoli, non come promesse su come il lavoro girerà esattamente.

{% include nav.html %}
