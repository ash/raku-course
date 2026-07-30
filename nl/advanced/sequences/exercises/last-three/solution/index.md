---
title: 'Solution: De laatste drie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (5, 10 ... 50).tail(3);
```

🦋 De broncode van dit programma is te vinden in het bestand [last-three.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/last-three.raku).

## Uitvoer

```
(40 45 50)
```

## Opmerkingen

1. De startwaarden `5, 10` stellen een rekenkundige stap van vijf in, en de reeks loopt door tot het eindpunt `50`.

1. `tail(3)` geeft de laatste drie waarden van de eindige reeks terug — `40, 45, 50` — net zoals `head` de eerste paar zou teruggeven.

{% include nav.html %}
