---
title: 'Solutio: Operator medietatis'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 Inveni codicem fontem in archivo [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Exitus

```
7
```

## Commentarii

1. Operator ut `infix:<avg>` declaratur, ergo inter duos operandos suos scribitur, sicut `+` vel `~`.

1. Corpus duos operandos addit et per duo dividit. Pro `4` et `10` eventus est `7`.

{% include nav.html %}
