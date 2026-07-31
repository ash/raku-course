---
title: 'Solutio: Summa cum sigilo `&`'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Inveni codicem fontem in archivo [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Exitus

```
5
```

## Commentarii

1. Cuspis acuta duos parametros enumerat, `-> $a, $b`, itaque subroutina anonyma duo argumenta accipit.

1. Quia variabilis cum sigillo `&` declarata est, ut `add(2, 3)` vocari potest prorsus sicut subroutina nominata -- sine sigillo in loco vocationis -- et `5` dat.

{% include nav.html %}
