---
title: 'Oplossing: Transponeer een matrix'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Je kunt de broncode vinden in het bestand [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Uitvoer

```
((1 4) (2 5) (3 6))
```

## Opmerkingen

1. De zip-meta-operator `Z` koppelt elementen op positie. Als reductie
`[Z]` gebruikt ritst hij alle rijen aaneen en maakt hij van kolommen rijen — precies een
transpositie.

{% include nav.html %}
