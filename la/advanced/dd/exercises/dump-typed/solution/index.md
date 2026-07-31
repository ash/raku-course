---
title: 'Solutio: Variabilem typificatam dump'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my Int $n = 42;
dd $n;
```

🦋 Inveni codicem fontem in archivo [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Exitus

```
Int $n = 42
```

## Commentarii

1. Quia variabilis typum declaratum habet, `dd` illum typum ante nomen imprimit: `Int $n = 42`.

1. Variabilis sine typo simpliciter ut `$n = 42` exscriberetur, sine typo.

{% include nav.html %}
