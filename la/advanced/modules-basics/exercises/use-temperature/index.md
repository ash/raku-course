---
title: Convertorem utere
translations_gpt:
---

{% include menu.html %}

## Problema

Datur tibi modulus in archivo `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Scribe programma separatum quod hoc modulo utitur ad temperaturam Celsianam — ut argumentum lineae imperandi traditam — in Fahrenheitianam convertendam effectumque imprimendum.

## Exemplum

```console
$ raku -I. temperature.raku 100
212
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
