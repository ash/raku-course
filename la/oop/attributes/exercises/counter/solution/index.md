---
title: 'Solutio: Numerator'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Inveni codicem fontem in archivo [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Exitus

```
0
5
```

## Commentarii

1. Attributum `is rw` declaratur ut eius accessor receptaculum scribendum reddat, et `= 0` ei valorem initialem dat. Primum `say` confirmat numeratorem recentem revera ab illo valore praedefinito, `0`, incipere.

1. Quia accessor scribendus est, eum per `++` augere ut exspectatur operatur.

{% include nav.html %}
