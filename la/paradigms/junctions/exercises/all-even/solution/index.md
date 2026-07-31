---
title: 'Solutio: Omnes pares'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Inveni codicem fontem in archivo [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Exitus

```
True
```

## Commentarii

1. Probatio automatice filat: `%% 2` unicuique valori applicatur, et iunctura `all` postulat ut omnis transeat.

1. Omnes tres numeri pares sunt, itaque effectus est `True`. Si vel unus impar esset, `False` esset.

{% include nav.html %}
