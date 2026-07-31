---
title: 'Solutio: Operator centesimae'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Inveni codicem fontem in archivo [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Exitus

```
30
```

## Commentarii

1. Operator centesimam `$p` ut operandum sinistrum et quantitatem totam `$whole` ut operandum dextrum accipit.

1. `$whole` per `$p` multiplicans et per `100` dividens partem petitam dat: `150 * 20 / 100` est `30`.

{% include nav.html %}
