---
title: 'Solutio: Matricem transpone'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Inveni codicem fontem in archivo [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Exitus

```
((1 4) (2 5) (3 6))
```

## Commentarii

1. Metaoperator zip `Z` elementa secundum locum coniungit. Ut reductio
`[Z]` adhibitus, omnes ordines simul coniungit, columnas in ordines vertens — exacte
transpositio.

{% include nav.html %}
