---
title: 'Risinājums: Teksta histogramma'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Atrodiet programmu failā [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Izvade

```
apples	#####
pears	###
plums	########
```

## Komentāri

1. Virkņu atkārtošanas operators `x` uzbūvē katru stabiņu: `'#' x 5` ir `#####`.
Vērtība vienkārši kļūst par stabiņa garumu.

1. `\t` starp apzīmējumu un stabiņu ir tabulatora rakstzīme, tāpēc stabiņi
sarindojas kolonnā, nevis sākas uzreiz aiz katra dažāda garuma nosaukuma.

{% include nav.html %}
