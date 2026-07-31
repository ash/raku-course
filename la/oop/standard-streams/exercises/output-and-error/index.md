---
title: Exitus et errores
translations_gpt:
---

{% include menu.html %}

## Problema

Programma seriem numerorum `3, 5, 7` in anulo addit. In unoquoque cursu mitte summam currentem ad errorem vulgarem ut nuntium progressus, et post anulum mitte effectum finalem ad exitum vulgarem, tractabulis fluentorum directe utens.

Haec separatio refert: effectus capi vel ulterius duci potest, dum nuntii progressus in errore vulgari extra viam manent.

## Exemplum

Cum programma curris, utrumque fluentum in screen apparet — summae currentes, deinde effectus finalis:

```
running total: 3
running total: 8
running total: 15
15
```

Sed si errorem vulgarem abicis, solus verus effectus manet:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
