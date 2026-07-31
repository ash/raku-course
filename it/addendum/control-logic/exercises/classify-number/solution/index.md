---
title: 'Soluzione: Segno e parità'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Trova il programma nel file [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Output

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Commenti

1. Il segno viene scelto con un operatore ternario *concatenato*: `negative` sotto zero,
altrimenti `zero` in caso di uguaglianza, altrimenti `positive`.

1. `$n %% 2` verifica la divisibilità per due, quindi è vero per i numeri pari e falso per
quelli dispari. (`0` conta come pari.)

{% include nav.html %}
