---
title: 'Uzante `WHAT`'
translations_gpt:
---

{% include menu.html %}

`WHAT` estas pseudo-metodo kiu donas aliron al la tipo de valoro. Vi povas uzi ghin tre simile al `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Ambau presas la tipon kun malgranda diferenco en prezento: `.^name` donas la nudan nomon, dum `WHAT` montras la tip-objekton, skribitan en krampoj:

```
Int
(Int)
```

Por variablo sen tiplimigo, la tipo komencas kiel `Any`. Tuj kiam vi atribuas valoron, ambau `^name` kaj `WHAT` sekvas la tipon de la konservita valoro:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Kun tiplimigo, la tipo estas konata tuj, ech antau ol io ajn estas atribuita:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Komparado de tip-objektoj

Char `WHAT` redonas la tip-objekton mem, vi povas kompari du el ili per la operatoro de _valor-identeco_ `===`, kiu demandas chu ambau flankoj estas ghuste la sama valoro. Ekzistas chiam nur unu tip-objekto por chiu tipo, do tio estas pura maniero testi chu du valoroj havas la saman tipon:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

Male al `==`, kiu komparas nombrojn, `===` komparas identecon, do ghi funkcias por tip-objektoj (kaj aliaj valoroj) rekte.

{% include nav.html %}
