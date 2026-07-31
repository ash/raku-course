---
title: 'Solutio: Praedefinitum discidium'
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Inveni codicem fontem in archivo [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Sane, solutio simplicior esset variabilem directe cum `0` initiare:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Exitus

```
0
15
```

## Commentarii

1. Trattum `is default(0)` continenti valorem dat ad quem recurrere possit dum nihil ei assignatum est. Variabilem legere `0` reddit, et, dissimilis a defectu non declarato, nullum monitum de _valore non initiato_ producit.

1. Post assignationem, continens `15` tenet, et defectus nullum amplius munus habet.

{% include nav.html %}
