---
title: 'Oplossing: Een open bereik'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (2, 4 ... *).head(4);
```

🦋 Je kunt de broncode vinden in het bestand [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Uitvoer

```
(2 4 6 8)
```

## Opmerkingen

1. De beginwaarden `2, 4` bepalen een rekenkundige stap van twee, en de kale `*` als eindpunt betekent dat de reeks nooit ophoudt.

1. `head(4)` haalt alleen de eerste vier waarden op: `2, 4, 6, 8`. De reeks is lui, dus de onbegrensde staart wordt nooit berekend — de kale ster betekent hier "wat dan ook, zonder bovengrens".

{% include nav.html %}
