---
title: 'Solvo: Nombru la atributojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Eligo

```
2
```

## Komentoj

1. `.^attributes` redonas la liston de la atributoj de la klaso.

1. `.elems` kalkulas ilin. La klaso `Point` deklaras du atributojn, do la respondo estas `2`.

{% include nav.html %}
