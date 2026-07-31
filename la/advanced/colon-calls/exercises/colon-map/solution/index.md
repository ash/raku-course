---
title: 'Solutio: Map cum duplo puncto'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Inveni codicem fontem in archivo [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Exitus

```
(12 14 16 18 20)
```

## Commentarii

1. Solum `grep`, ultima vocatio in catena, forma cum colono uti potest. Colon `* > 10` eius argumentum facit, exacte ut `grep(* > 10)` faceret. Cum adhuc exitus imprimendus sit, `say` nunc ut functio adhibetur, non ut methodus.

1. Vocatio `map` parentheses suas retinere debet. Si `.map: * * 2` scripsisses, colon `.grep(* > 10)` ut partem argumentorum `map` absorbuisset, et catena fracta esset.

{% include nav.html %}
