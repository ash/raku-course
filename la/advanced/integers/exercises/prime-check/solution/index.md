---
title: 'Solutio: Primus an non'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
say 97.is-prime;
say 91.is-prime;
```

🦋 Inveni codicem fontem in archivo [prime-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/prime-check.raku).

## Exitus

```
True
False
```

## Commentarii

1. `97` nullos divisores praeter `1` et se ipsum habet, itaque `is-prime` reddit `True`.

1. `91` primus videtur sed est `7 × 13`, itaque `is-prime` reddit `False`. Methodus factorizationem pro te facit, quod est totum propositum eius habendi.

{% include nav.html %}
