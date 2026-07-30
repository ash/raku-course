---
title: 'Quiz — Reduktion'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` faltet die Liste von links nach rechts, und das **erste** Argument des Blocks ist stets das bisherige Ergebnis — hier der linke Operand von `-`. Es berechnet also `((10 - 1) - 2) - 3`, also `9 - 2 - 3 = 4`. Andersherum gefaltet, `10 - (1 - (2 - 3))`, ergäbe `8`, und Addieren statt Abziehen ergäbe `16`. Anders als `+` hängt das Abziehen von der Reihenfolge ab, die Rollen der beiden Argumente sind also wirklich wichtig.

</div>

{% include nav.html %}
