---
title: 'Oplossing: Een tekstueel histogram'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Je kunt de broncode vinden in het bestand [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Uitvoer

```
apples	#####
pears	###
plums	########
```

## Opmerkingen

1. De stringherhalingsoperator `x` bouwt elke staaf: `'#' x 5` is `#####`. De
waarde wordt eenvoudigweg de staaflengte.

1. De `\t` tussen het label en de staaf is een tabteken, zodat de staven in een
kolom uitlijnen in plaats van vlak achter elke naam van verschillende lengte te beginnen.

{% include nav.html %}
