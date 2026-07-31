---
title: 'Solutio: Signum et paritas'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 Inveni codicem fontem in archivo [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Exitus

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Commentarii

1. Signum ternario *concatenato* eligitur: `negative` cum infra nihil est,
alioquin `zero` cum aequat, alioquin `positive`.

1. `$n %% 2` divisibilitatem per duo probat, itaque verum est pro numeris paribus et falsum
pro imparibus. (`0` ut par numeratur.)

{% include nav.html %}
