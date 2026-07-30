---
title: 'Solution: Een statistiekmodule gebruiken'
translations_gpt: De oplossing van 'Gebruik een statistiekmodule'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

Het programma, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Uitvoer

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Opmerkingen

1. Een enkele `use Stats` haalt *beide* geëxporteerde subroutines tegelijk binnen — `use` importeert alles wat de module markeert met `is export`, niet slechts één naam.

1. `mean` roept `total` aan binnen de module. Het programma roept `total` daar niet zelf aan, maar toch werkt het: de subroutines van een module kunnen op elkaar vertrouwen, en de aanroeper ziet alleen de geëxporteerde namen.

1. Met vier getallen die optellen tot `100`, is het gemiddelde `100 / 4`, wat `25` is.

{% include nav.html %}
