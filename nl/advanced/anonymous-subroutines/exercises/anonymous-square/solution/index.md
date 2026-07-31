---
title: 'Solution: Een anoniem kwadraat'
translations_gpt: De oplossing van 'Een anoniem kwadraat'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Je kunt de broncode vinden in het bestand [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Uitvoer

```
(1 4 9)
```

## Opmerkingen

1. De `sub ($x) { $x * $x }` heeft geen naam en wordt nooit in een variabele opgeslagen — hij wordt direct als argument aan `map` doorgegeven.

1. `map` past het toe op elk element van `1, 2, 3` en kwadraert ze tot `(1 4 9)`. Een anonieme subroutine op deze manier inline doorgeven is de meest voorkomende reden om er een te schrijven.

{% include nav.html %}
