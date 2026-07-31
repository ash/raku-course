---
title: 'Solutio: Accumulator'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Inveni codicem fontem in archivo [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Exitus

```
15
```

## Commentarii

1. Clausura `$sum` capit, quae inter vocationes superest.

1. `acc(10)` summam `10` facit; `acc(5)` quinque addit et `15` reddit.

{% include nav.html %}
