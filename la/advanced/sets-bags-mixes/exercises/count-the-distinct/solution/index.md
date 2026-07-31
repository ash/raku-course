---
title: 'Solutio: Distincta numerare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Inveni codicem fontem in archivo [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Exitus

```
7
```

## Commentarii

1. Ordinem functioni `set` tradendo inopiam ex eius valoribus aedificas. Quia inopia tantum valores distinctos servat, numeri repetiti in unum collabuntur.

1. Methodus `elems` deinde numerum valorum distinctorum reddit, qui est `7`.

{% include nav.html %}
