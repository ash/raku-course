---
title: Map cum duplo puncto
translations_gpt:
---

{% include menu.html %}

## Problema

Hic est expressio quae numeros `1` ad `10` duplicat et deinde solum eos qui maiores quam `10` sunt retinet:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Rescribe eam ita ut vocatio methodi `grep` formam cum colono loco parenthesium adhibeat. Reliquum catenae immutatum relinque. Memento formam cum colono reliquum enuntiati consumere, itaque solum ultima vocatio in catena ea uti potest.

## Exemplum

Programma imprimit:

```
(12 14 16 18 20)
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
