---
title: Catture con nome
translations_gpt:
---

{% include menu.html %}

Le catture numerate sono comode, ma quando uno schema cresce i nomi sono più chiari dei numeri. Per dare un nome a una cattura, scrivi `$<nome>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

I pezzi catturati si raggiungono ora per nome con `$<name>` e `$<age>` invece che con `$0` e `$1`. È lo stesso che scrivere `$/<name>`, perché i nomi vivono dentro la variabile di match `$/`.

Le catture con nome fanno leggere uno schema quasi come una descrizione dei dati:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Come per le catture posizionali, ogni cattura con nome è un oggetto match, quindi `$<age>.Str` dà il testo semplice e `$<age>.from` dà la sua posizione.

{% include nav.html %}
