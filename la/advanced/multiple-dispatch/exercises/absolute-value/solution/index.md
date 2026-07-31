---
title: 'Solutio: Valor absolutus'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Inveni codicem fontem in archivo [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Exitus

```
7
4
```

## Commentarii

1. Primus candidatus solum numeros negativos capit et valorem negatum reddit, qui positivus est.

1. Omnis alius numerus — zero et positivi — ad secundum candidatum it, qui valorem immutatum reddit.

{% include nav.html %}
