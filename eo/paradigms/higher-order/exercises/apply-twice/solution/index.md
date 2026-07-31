---
title: 'Solvo: Apliku dufoje'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Vi povas trovi la fontkodon en la dosiero [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Eligo

```
18
```

## Komentoj

1. La parametro `&f` ricevas subprogramon; la interna `f($x)` estas enigata en la eksteran `f(...)`.

1. Trioblo de `2` donas `6`, kaj trioblo denove donas `18`.

{% include nav.html %}
