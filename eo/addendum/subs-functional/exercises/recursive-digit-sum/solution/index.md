---
title: 'Solvo: Cifersumo per rekursio'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 Vi povas trovi la fontkodon en la dosiero [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Eligo

```
15
```

## Komentoj

1. La baza kazo estas unucifera nombro, kiu estas sia propra cifersumo. Alie
la rutino deprenas la lastan ciferon per `$n % 10` kaj rekursias sur la cetero,
`$n div 10`.

{% include nav.html %}
