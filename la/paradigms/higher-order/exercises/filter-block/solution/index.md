---
title: 'Solutio: Per blocum filtrare'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Inveni codicem fontem in archivo [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Exitus

```
5
```

## Commentarii

1. `grep` blocum `* > 5` accipit et numeros pro quibus verus est servat: `6, 7, 8, 9, 10`.

1. `.elems` eos numerat, dans `5`.

{% include nav.html %}
