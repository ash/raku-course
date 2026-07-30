---
title: 'Oplossing: Product van een lijst'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say [*] 1..6;
```

🦋 Je kunt de broncode vinden in het bestand [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Uitvoer

```
720
```

## Opmerkingen

1. `[*]` voegt `*` tussen elk element van het bereik in en vermenigvuldigt ze allemaal.

1. `1 * 2 * 3 * 4 * 5 * 6` is `720` — hetzelfde als de faculteit van `6`.

{% include nav.html %}
