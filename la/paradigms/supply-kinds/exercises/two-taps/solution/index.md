---
title: 'Solutio: Duae coniunctiones'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Inveni codicem fontem in archivo [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Exitus

```
[2 4 6]
[3 6 9]
```

## Commentarii

1. `Supply.from-list` ad petitionem est, itaque seriem suam plenam pro **unaquaque** coniunctione, independenter, iterum agit.

1. Hoc sinit duas coniunctiones fistulas diversas super eundem fontem currere: una duplicat, altera triplicat. Utraque omnia ex `1, 2, 3` videt, itaque effectus sunt `[2 4 6]` et `[3 6 9]`.

{% include nav.html %}
