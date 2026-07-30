---
title: 'Solution: Een array aliassen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Je kunt de broncode vinden in het bestand [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Uitvoer

```
[10 20 30 40]
```

## Opmerkingen

1. De binding `@alias := @original` maakt `@alias` een andere naam voor dezelfde array container, in plaats van een kopie ervan.

1. De wijziging wordt deze keer via `@original` gemaakt, en het is een structurele — `push` voegt een element toe. Omdat beide namen exact dezelfde container zijn, ziet `@alias` het nieuwe element ook. De twee namen zijn volledig uitwisselbaar: het maakt niet uit welke je gebruikt om het array te lezen of te wijzigen.

{% include nav.html %}
