---
title: 'Solution: Tel de unieke'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Je kunt de broncode vinden in het bestand [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Uitvoer

```
7
```

## Opmerkingen

1. Het doorgeven van de array aan `set` bouwt een set van de waarden. Omdat een set alleen unieke waarden bewaart, worden de herhaalde getallen samengevoegd tot een.

1. De methode `elems` geeft vervolgens het aantal unieke waarden terug, namelijk `7`.

{% include nav.html %}
