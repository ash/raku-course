---
title: 'Solvo: Sumo de ciferoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Eligo

```
10
```

## Komentoj

1. La baza kazo estas unucifera nombro, kiu estas sia propra cifersumo.

1. Alie `$n % 10` estas la lasta cifero kaj `$n div 10` forigas ĝin; `1 + 2 + 3 + 4` estas `10`.

{% include nav.html %}
