---
title: 'Solution: Elke faculteit tegelijk'
translations_gpt: De oplossing van 'Alle faculteiten tegelijk'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say [\*] 1..6;
```

🦋 Je kunt de broncode vinden in het bestand [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Uitvoer

```
(1 2 6 24 120 720)
```

## Opmerkingen

1. De backslash binnen de haken verandert `[*]` in een *driehoeks*reductie. In plaats van de lijst tot een enkele waarde samen te vouwen, bewaart hij elk gedeeltelijk product: `1`, dan `1*2`, dan `1*2*3`, enzovoort.

1. Elk gedeeltelijk product `1*2*...*k` is precies _k!_, dus het resultaat is de lijst van faculteiten van `1` tot en met `6`. Een gewone `[*] 1..6` zou alleen de laatste hiervan hebben gegeven, `720`.

{% include nav.html %}
