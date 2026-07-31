---
title: 'Solutio: Operator quadrandi'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Inveni codicem fontem in archivo [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Exitus

```
25
```

## Commentarii

1. Operator ut `postfix:<²>` declaratur, ergo symbolum eius — character superscriptus-duo — post operandum suum scribitur, ut in `5²`.

1. Corpus operandum ad potestatem duorum elevat, ergo `5²` ad `25` aestimatur. Nihil te impedit symbolum Unicode adhibere quod notationem mathematicam referat.

{% include nav.html %}
