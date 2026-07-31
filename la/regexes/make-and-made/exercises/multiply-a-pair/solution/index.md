---
title: 'Solutio: Par multiplica'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Inveni codicem fontem in archivo [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Exitus

```
20
```

## Commentarii

1. Duo numeri ut `<a>` et `<b>` capiuntur, uterque per `.Int` versus.

1. Clausula inserta subcongruentias coniungit — eas multiplicans — et effectum in congruentia servat, quem `made` deinde reddit.

{% include nav.html %}
