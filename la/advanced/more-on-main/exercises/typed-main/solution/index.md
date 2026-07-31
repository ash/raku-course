---
title: 'Solutio: MAIN typificatum'
translations_gpt: true
---

{% include menu.html %}

Ecce solutio possibilis huius muneris.

## Codex

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Codicem fontem in fasciculo [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku) invenire potes.

## Exitus

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Commentarii

1. Restrictio `Int` significat verbum lineae mandati formam numeri integri habere debere. Dato `5`, ad `$n` ligatur et corpus `10` imprimit.

1. Dato `abc`, valor `Int` fieri non potest, itaque signatura non congruit. Raku corpus non exsequitur — nuntium de usu generatum pro eo imprimit, validationem argumentorum sine ullis inspectionibus manualibus tibi praebens.

{% include nav.html %}
