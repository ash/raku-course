---
title: 'Oplossing: Machten van drie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say (1, * * 3 ... *).head(5);
```

🦋 Je kunt de broncode vinden in het bestand [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Uitvoer

```
(1 3 9 27 81)
```

## Opmerkingen

1. De closure `* * 3` is de regel voor de volgende term: neem de huidige en vermenigvuldig met drie. De regel expliciet geven is betrouwbaarder dan de operator hem uit de eerste paar termen te laten raden.

1. Het eindpunt `*` maakt de reeks oneindig, en `.head(5)` neemt de eerste vijf.

{% include nav.html %}
