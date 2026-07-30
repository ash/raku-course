---
title: 'Oplossing: Tel de attributen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Je kunt de broncode vinden in het bestand [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Uitvoer

```
2
```

## Opmerkingen

1. `.^attributes` geeft de lijst met attributen van de klasse terug.

1. `.elems` telt ze. De klasse `Point` declareert twee attributen, dus het antwoord is `2`.

{% include nav.html %}
