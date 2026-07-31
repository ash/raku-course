---
title: 'Solutio: Attributa numera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Inveni codicem fontem in archivo [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Exitus

```
2
```

## Commentarii

1. `.^attributes` indicem attributorum classis reddit.

1. `.elems` ea numerat. Classis `Point` duo attributa declarat, itaque responsum est `2`.

{% include nav.html %}
