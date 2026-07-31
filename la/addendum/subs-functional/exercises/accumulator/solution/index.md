---
title: 'Solutio: Accumulator crescens'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Inveni codicem fontem in archivo [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Exitus

```
110
135
130
```

## Commentarii

1. Blocus redditus `$total` *claudit*: illa variabilis inter vocationes superstes est,
itaque unaquaeque vocatio summam vocationis prioris meminit.

1. `$total += $amount` et summam currentem renovat et illam reddit, quod est id quod
unumquodque `say` imprimit: `110`, deinde `135`, deinde `130`.

1. Alternativa summam intra ipsum blocum servat, in variabili `state`.
Dissimilis `my` ordinario, variabilis `state` semel tantum initiatur — primo
tempore quo blocus currit — et deinde valorem suum per vocationes posteriores servat:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Unaquaeque vocatio ipsius `make-accumulator` blocum novum cum proprio
    `state $total` producit, itaque accumulatores separati independentes manent — et clausura
    super `$start` adhuc unicuique valorem initialem proprium praebet.

{% include nav.html %}
