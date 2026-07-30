---
title: 'Solution: Tellen en totaal'
translations_gpt: Dutch
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
enum Coin (penny => 1, nickel => 5, dime => 10, quarter => 25);

say Coin.enums.elems;
say Coin.enums.values.sum;
```

🦋 Je kunt de broncode vinden in het bestand [enum-introspection.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/enum-introspection.raku).

## Uitvoer

```
4
41
```

## Opmerkingen

1. De constanten zijn gedefinieerd als paren, zodat elk de waarde krijgt die wij hebben gekozen in plaats van de automatische nummering vanaf nul.

1. `.enums` geeft een map van elke constantenaam naar zijn waarde. `.elems` telt de items — er zijn vier munten.

1. `.values` haalt alleen de getallen achter de namen op, en `.sum` telt ze op: `1 + 5 + 10 + 25` is `41`.

{% include nav.html %}
