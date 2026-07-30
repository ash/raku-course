---
title: 'Solution: Hoeveel cijfers'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (2 ** 1000).chars;
```

🦋 Je kunt de broncode vinden in het bestand [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Uitvoer

```
302
```

## Opmerkingen

1. `2 ** 1000` wordt exact berekend: Raku rondt het niet af en loopt niet over, omdat gehele getallen willekeurige precisie hebben.

1. `chars` is normaal gesproken een string methode, maar als je het op een integer aanroept, wordt het getal eerst omgezet naar decimale tekst en daarna worden de tekens geteld. Aangezien er hier geen minteken of decimaalpunt is, is dat aantal tekens exact het aantal cijfers — `302`.

{% include nav.html %}
