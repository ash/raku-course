---
title: 'Solutio: Triplicare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my $factor = 3;
my $scale = -> $x { $x * $factor };

say $scale(7);
```

🦋 Inveni codicem fontem in archivo [triple-it.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/triple-it.raku).

## Exitus

```
21
```

## Commentarii

1. Cuspis acuta `$factor` utitur, variabili ex ambitu circumiecto, quamvis solum parametrum `$x` habeat. Tales variabiles capere est quod eam clausuram facit.

1. Cum `$factor` aequalis sit `3`, vocatio `$scale(7)` dat `21`. Muta `$factor` et eadem clausura novo valore multiplicabit:

```raku
$factor = 5;
say $scale(7); # 35
```

Quia clausura *variabilem* ipsam capit, non valorem eius eo tempore quo scripta est, vocatio posterior `$factor` renovatum videt et `35` reddit.

{% include nav.html %}
