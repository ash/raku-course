---
title: 'Solutio: Summae crescentes'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Inveni codicem fontem in archivo [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Exitus

```
[2 6 12 20]
```

## Commentarii

1. Blocus `$sum` currentem in variabili extra map servat. Unaquaeque vocatio elementum
praesens addit et summam novam reddit, itaque index mappatus series
summarum partialium est.

1. Raku hoc incorporatum habet. [Reductio triangularis](/la/advanced/metaoperators/reduction)
`[\+]` omnem summam partialem servat, itaque tota solutio una expressio est:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    `Seq` reddit, itaque forma eius parenthesibus utitur — `(2 6 12 20)` — potius quam
    `[2 6 12 20]` ordinis, sed numeri idem sunt.

{% include nav.html %}
