---
title: 'Solutio: Cubos collige'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
```

🦋 Inveni codicem fontem in archivo [gather-cubes.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-cubes.raku).

## Exitus

```
[1 8 27 64]
```

## Commentarii

1. `take` semel pro unoquoque numero currit, cubum eius (`$_ ** 3`) conferens.

1. Blocus `gather` in indicem omnium valorum sumptorum aestimatur.

{% include nav.html %}
