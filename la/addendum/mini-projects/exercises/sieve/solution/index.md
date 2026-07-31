---
title: 'Solutio: Cribrum Eratosthenis'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $limit = 30;
my %composite;

for 2 .. $limit -> $i {
    next if %composite{$i};
    for ($i², $i² + $i ... $limit) -> $multiple {
        %composite{$multiple} = True;
    }
}

say (2..$limit).grep({ !%composite{$_} });
```

🦋 Inveni codicem fontem in archivo [sieve.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/sieve.raku).

## Exitus

```
(2 3 5 7 11 13 17 19 23 29)
```

## Commentarii

1. Pro indice signorum, `%composite` meminit qui numeri deleti sint.
Numerus adhuc in eo absens cum vicis eius venit primus est.

1. Pro unoquoque primo `$i`, multiplices eius ut series
`$i², $i² + $i ... $limit` generantur et compositi notantur. A `$i²` incipere
multiplices a primis minoribus iam tractatos praeterit.

1. Haec una [series](/la/paradigms/lazy/sequence-operator) est, non caput `for` more C
scriptum. Operator `...` duos primos valores sumit, gradum inter eos
computat, et usque ad limitem pergit. Pro `$i` = `3` hoc significat a `9`
incipere, deinde `12`, itaque gradus `3` est, et anulus totum indicem percurrit:

    ```raku
    my $i = 3;
    say ($i², $i² + $i ... 30); # (9 12 15 18 21 24 27 30)
    ```

    Itaque `for` unum indicem accipit per quem iteret — `9, 12, 15, …` — potius quam tres
clausulas separatas.

1. `$i²` numerum per exponentem superscriptum Unicode quadrat. Raku omnes tres formas
`$i * $i`, `$i ** 2` et `$i²` accipit — eundem prorsus valorem computant, itaque elige
quaecumque tibi optime legitur. Cifrae superscriptae (`²`, `³`, …) signa ordinaria
sunt quae directe in fontem scribere vel inserere potes.

{% include nav.html %}
