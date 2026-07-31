---
title: 'Solutio: Supply filtra'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Inveni codicem fontem in archivo [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Exitus

```
[2 4 6]
```

## Commentarii

1. `grep(* %% 2)` novum supply producit quod solos valores pares transmittit, prorsus ut `grep` indicem filtrat.

1. Coniunctio illos valores in `@out` colligit, dans `[2 4 6]`.

{% include nav.html %}
