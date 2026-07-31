---
title: 'Solvo: Forigi ŝlosilon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Eligo

```
2
```

## Komentoj

1. La adverbo `:delete` forigas la eron el la hako (ĉi tie ni ignoras la valoron, kiun ĝi redonas).

1. La hako komenciĝis kun tri eroj kaj nun havas `2`, konfirmante, ke unu estis forigita. Kalkuli per `.elems` konservas la eligon antaŭvidebla sen dependi de la ordo de la ŝlosiloj.

{% include nav.html %}
