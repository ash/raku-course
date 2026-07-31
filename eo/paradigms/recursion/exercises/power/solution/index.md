---
title: 'Solvo: Potenco'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Vi povas trovi la fontkodon en la dosiero [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Eligo

```
1024
```

## Komentoj

1. La baza kazo redonas `1`, kiam la eksponento atingas `0`, ĉar ajna bazo al la potenco nulo estas unu.

1. La rekursia paŝo multiplikas `$base` per `power($base, $exp - 1)`, deprenante unu faktoron ĉiufoje. Do `power(2, 10)` multiplikas dek `2`-ojn kune, donante `1024`.

{% include nav.html %}
