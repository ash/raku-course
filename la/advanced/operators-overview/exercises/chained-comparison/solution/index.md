---
title: 'Solutio: Comparatio catenata'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
say 0 <= 73 <= 100;
```

🦋 Inveni codicem fontem in archivo [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Exitus

```
True
```

## Commentarii

1. Operatores comparationis catenari possunt, ergo `0 <= 73 <= 100` legitur ut "0 est ad summum 73, et 73 est ad summum 100". Operator `<=` fines permittit, ergo punctum exacte `0` vel `100` quoque validum esset.

1. Ambae partes verae sunt, ergo tota expressio `True` est. Nota valorem medium `73` semel tantum scribi, etsi cum ambobus vicinis comparatur.

1. Sine proprietate catenationis, ambas comparationes explicite scribere et cum `&&` coniungere deberes, valorem medium repetens: `0 <= 73 && 73 <= 100`. Forma catenata idem brevius dicit.

{% include nav.html %}
