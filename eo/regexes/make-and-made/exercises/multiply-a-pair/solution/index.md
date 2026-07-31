---
title: 'Solvo: Multipliku paron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Vi povas trovi la fontkodon en la dosiero [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Eligo

```
20
```

## Komentoj

1. La du nombroj estas kaptitaj kiel `<a>` kaj `<b>`, ĉiu konvertita per `.Int`.

1. La enlinia bloko kombinas la subkongruojn — multiplikante ilin — kaj konservas la rezulton sur la kongruo, kion `made` poste redonas.

{% include nav.html %}
