---
title: 'Solutio: Coniunge et exspecta'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Inveni codicem fontem in archivo [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Exitus

```
first
second
```

## Commentarii

1. `.finish` moratur donec filum `first` impresserit.

1. Solum tunc programma principale pergit et `second` imprimit, itaque ordo garantitur. Sine `.finish` duae lineae quolibet ordine apparere possent.

{% include nav.html %}
