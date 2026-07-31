---
title: 'Solvo: Akumulilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Eligo

```
15
```

## Komentoj

1. La fermaĵo kaptas `$sum`, kiu postvivas inter vokoj.

1. `acc(10)` faras la sumon `10`; `acc(5)` aldonas kvin kaj redonas `15`.

{% include nav.html %}
