---
title: 'Solutio: Parametrum scribibile'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
```

🦋 Inveni codicem fontem in archivo [writable-parameter.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/writable-parameter.raku).

## Exitus

```
42
```

## Commentarii

1. `is rw` parametrum `$n` variabili vocantis `$score` ligat, itaque `$n *= 2` intra `double` ipsum `$score` mutat — quod est cur `42` imprimit.

1. Sine `is rw`, parametrum tantum-lectu esset et `$n *= 2` error tempore compilationis esset. Signando `is copy` potius, `double` copiam privatam ad mutandum haberet, `$score` intactum ad `21` relinquens.

{% include nav.html %}
