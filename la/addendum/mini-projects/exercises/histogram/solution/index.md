---
title: 'Solutio: Histogramma textuale'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Inveni codicem fontem in archivo [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Exitus

```
apples	#####
pears	###
plums	########
```

## Commentarii

1. Operator repetitionis catenae `x` unamquamque virgam aedificat: `'#' x 5` est `#####`. Valor
simpliciter longitudo virgae fit.

1. `\t` inter nomen et virgam signum tabulationis est, itaque virgae in columna
componuntur pro eo quod statim post unumquodque nomen diversae longitudinis incipiunt.

{% include nav.html %}
