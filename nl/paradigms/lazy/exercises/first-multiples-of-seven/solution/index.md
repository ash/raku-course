---
title: 'Oplossing: De eerste veelvouden van zeven'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Je kunt de broncode vinden in het bestand [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Uitvoer

```
(7 14 21 28 35)
```

## Opmerkingen

1. `1..*` is een oneindig bereik; `.map(* * 7)` vermenigvuldigt elk element lui met zeven.

1. `.head(5)` haalt er alleen de eerste vijf uit, dus wordt de oneindige bron nooit volledig berekend.

{% include nav.html %}
