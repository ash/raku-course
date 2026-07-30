---
title: 'Solution: Machten van twee'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 De broncode van dit programma is te vinden in het bestand [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Uitvoer

```
(1 2 4 8 16 32 64 128)
```

## Opmerkingen

1. De drie startwaarden `1, 2, 4` groeien door vermenigvuldiging, dus `...` herkent een meetkundige reeks; met `Inf` als eindpunt stopt hij nooit uit zichzelf.

1. `head(8)` haalt alleen de eerste acht waarden op. Omdat de reeks lui is, worden de overige nooit gegenereerd — en dat is de enige reden waarom het veilig is om een oneindige reeks te schrijven.

{% include nav.html %}
