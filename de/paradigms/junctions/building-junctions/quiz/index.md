---
title: 'Quiz — Junctions'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Eine `all`-Junction ist nur wahr, wenn **jeder** Wert trifft. Die Prüfung `4 == all(2, 4, 6)` fragt, ob `4` gleich `2` und `4` und `6` ist — was es nicht ist, das Ergebnis ist also `False`.

Neugierig, was es `True` machen *könnte*? Die linke Seite müsste zugleich gleich `2`, `4` und `6` sein. Keine einzelne Zahl kann das — eine Junction links aber schon: Eine `any`-Junction, die **alle drei** dieser Werte enthält, funktioniert, denn dann gelingt jeder der Vergleiche. Die beiden Seiten müssen nicht gleich groß sein — links dürfen zusätzliche Werte stehen:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

Die erste ist `True`, weil `any(2, 4, 6, 8)` weiterhin gleich `2`, `4` und `6` ist (die zusätzliche `8` schadet nicht). Die zweite ist `False`, weil der linken Seite eine `6` fehlt, `links == 6` also scheitert.

</div>

{% include nav.html %}
