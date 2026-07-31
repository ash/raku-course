---
title: 'Solutio: In filo exsequere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Inveni codicem fontem in archivo [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Exitus

```
working
```

## Commentarii

1. `Thread.start` blocum in filo novo currit.

1. `.finish` filum perficere exspectat, itaque programma non finit antequam `working` impressum sit.

{% include nav.html %}
