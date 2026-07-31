---
title: 'Solvo: Mezuma operatoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Vi povas trovi la fontkodon en la dosiero [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Eligo

```
7
```

## Komentoj

1. La operatoro estas deklarita kiel `infix:<avg>`, do ĝi estas skribata inter siaj du operandoj, same kiel `+` aŭ `~`.

1. La korpo adicias la du operandojn kaj dividas per du. Por `4` kaj `10` la rezulto estas `7`.

{% include nav.html %}
