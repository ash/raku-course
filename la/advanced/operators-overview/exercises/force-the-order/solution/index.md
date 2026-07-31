---
title: 'Solutio: Ordinem cogere'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
say 2 ** (3 + 1);
```

🦋 Inveni codicem fontem in archivo [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Exitus

```
16
```

## Commentarii

1. Sine parenthesibus, `**` arctius quam `+` ligaret, dans `(2 ** 3) + 1 = 9`.

1. Parentheses praecedentiam additionis elevant, ergo `3 + 1` primum computatur et expressio fit `2 ** 4`, quod est `16`. Parentheses semper tibi permittunt praecedentiam defaltam vincere.

{% include nav.html %}
