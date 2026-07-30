---
title: 'Quiz — Reductie'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`reduce` vouwt de lijst van links naar rechts, en het **eerste** argument van het blok is altijd het resultaat tot nu toe — hier de linkeroperand van `-`. Het berekent dus `((10 - 1) - 2) - 3`, dat wil zeggen `9 - 2 - 3 = 4`. Andersom vouwen, `10 - (1 - (2 - 3))`, zou `8` geven, en optellen in plaats van aftrekken zou `16` geven. Anders dan `+` hangt aftrekken van de volgorde af, dus de rollen van de twee argumenten doen er werkelijk toe.

</div>

{% include nav.html %}
