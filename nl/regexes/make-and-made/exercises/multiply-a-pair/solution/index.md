---
title: 'Oplossing: Vermenigvuldig een paar'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Je kunt de broncode vinden in het bestand [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Uitvoer

```
20
```

## Opmerkingen

1. De twee getallen worden als `<a>` en `<b>` gecapturd, elk omgezet met `.Int`.

1. Het inline blok combineert de submatches — het vermenigvuldigt ze — en bewaart het resultaat op de match, dat `made` daarna teruggeeft.

{% include nav.html %}
