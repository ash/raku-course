---
title: 'Solvo: Absoluta valoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Vi povas trovi la fontkodon en la dosiero [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Eligo

```
7
4
```

## Komentoj

1. La unua kandidato kongruas nur kun negativaj nombroj kaj redonas la neitan valoron, kiu estas pozitiva.

1. Ĉiu alia nombro — nulo kaj la pozitivaj — iras al la dua kandidato, kiu redonas la valoron senŝanĝe.

{% include nav.html %}
