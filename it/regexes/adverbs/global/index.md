---
title: Matching globale
translations_gpt:
---

{% include menu.html %}

Per impostazione predefinita un regex trova solo la **prima** corrispondenza. L'avverbio `:g` (abbreviazione di `:global`) trova **ogni** corrispondenza nella stringa. Si scrive sull'operatore `m///`:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Con `:g` il risultato si comporta come un elenco di oggetti match — uno per ogni punto in cui lo schema è stato trovato. Puoi contarli, scorrerli o trasformare ciascuno in una stringa:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Qui `\d+` ha riconosciuto tre sequenze distinte di cifre, e `:g` le ha raccolte tutte.

Il riconoscimento globale è lo strumento naturale ogni volta che la domanda è «quanti…» o «tutti i…» invece di «c'è un…».

{% include nav.html %}
