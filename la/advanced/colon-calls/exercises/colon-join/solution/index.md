---
title: 'Solutio: Iungere cum duplo puncto'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
say <a b c>.reverse.join: '-';
```

🦋 Inveni codicem fontem in archivo [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Exitus

```
c-b-a
```

## Commentarii

1. `.reverse` formam ordinariam retinet quia in medio catenae est. `join` ultima venit, itaque colono uti potest, `'-'` tradens exacte ut `join('-')` faceret.

1. Index inversus ad `c, b, a` deinde lineolis coniungitur, dans `c-b-a`. Forma cum colono cum valoribus ordinariis operatur, non solum cum codicibus clausis.

{% include nav.html %}
