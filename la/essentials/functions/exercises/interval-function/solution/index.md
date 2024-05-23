---
title: 'Solutio: Functio Intervallum'
---

{% include menu.html %}

In hac functione, tres-ramus `if` constructio adhibetur. Primae duae rami habent probationem Booleanam, sed tertia verificatio non necessaria est cum sit unica optio reliqua si numerus non transivit aut primam aut secundam probationem.

## Codex

Hic est solutio:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Inveni programmatum in archivo [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/interval-function.raku).

## Effectus

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}