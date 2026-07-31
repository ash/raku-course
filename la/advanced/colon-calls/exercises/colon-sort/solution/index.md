---
title: 'Solutio: Ordinare cum duplo puncto'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Inveni codicem fontem in archivo [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Exitus

```
(fig pear kiwi apple)
```

## Commentarii

1. Colon clavem ordinationis ad `sort` tradit sine parenthesibus circa eam necessariis.

1. `*.chars` est expressio Whatever quae significat "numerum litterarum cuiusque elementi". `sort` ea ut clave utitur, itaque verba brevissima prima prodeunt: `fig` (3), deinde `pear` et `kiwi` (4), deinde `apple` (5).

1. `pear` locum suum ante `kiwi` retinet quia eandem longitudinem habent et `sort` stabilis est, ordinem originalem clavium aequalium servans.

{% include nav.html %}
