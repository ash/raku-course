---
title: 'Solvo: Ŝlosilo kaj valoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Vi povas trovi la fontkodon en la dosiero [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Eligo

```
(x 10)
```

## Komentoj

1. La adverbo `:kv` redonas kaj la ŝlosilon kaj la valoron kiel liston.

1. Por hako, la ŝlosilo estas la nomo, per kiu vi subskribas, do `%h<x>:kv` donas la liston `(x 10)`.

{% include nav.html %}
