---
title: 'Solvo: Signo kaj pareco'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Eligo

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Komentoj

1. La signo estas elektata per *ĉenigita* ternara operatoro: `negative`, kiam ĝi
estas sub nulo, alie `zero`, kiam ĝi egalas, alie `positive`.

1. `$n %% 2` testas divideblecon per du, do ĝi estas vera por paraj nombroj kaj
malvera por neparaj. (`0` kalkuliĝas kiel para.)

{% include nav.html %}
