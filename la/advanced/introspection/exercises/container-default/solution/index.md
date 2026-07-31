---
title: 'Solutio: Praedefinitum receptaculi'
translations_gpt: Solutio exercitationis 'Praedefinitum receptaculi'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Inveni codicem fontem in archivo [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Exitus

```
0
0
```

## Commentarii

1. Tropus `is default(0)` receptaculo valorem praedefinitum dat. Quia nihil assignatum est, lectio `$count` illud praedefinitum reddit, ergo prima linea `0` imprimit.

1. `.VAR.default` receptaculum ipsum de praedefinito declarato interrogat, quod etiam `0` est. Sine tropo, receptaculum sine typo definito ad `(Any)` praedefinitum habuisset.

{% include nav.html %}
