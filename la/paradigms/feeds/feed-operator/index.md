---
title: Operator fluxus
translations_gpt:
---

{% include menu.html %}

Operator fluxus `==>` indicem a sinistra in operationem a dextra mittit. Effectus deinde eo fluit quo `==>` sequens spectat, in variabili desinens quae illum colligit:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Lege a sinistra ad dextram: cape `1..10`, serva numeros pares, et effectum in `@evens` repone. Operator `%%` significat «dividitur per», itaque `* %% 2` numeros pares servat.

Regula gravis est fluxum **in scopo desinere** debere — plerumque `my @array` (vel variabilis exsistens). Data in illam prorsum fluunt. Assignationem altero modo, per `=`, scribere non agit quod vis, quia fluxus et assignatio inter se certant; semper sine fluxum in variabilem suam finire.

Fluxus est solum alius modus catenam operationum indicis scribendi. Idem effectus ut `my @evens = (1..10).grep(* %% 2)` scribi posset. Forma fluxus vim suam ostendit cum plures gradus sunt, ut argumentum sequens ostendit.

{% include nav.html %}
