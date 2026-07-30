---
title: 'Quiz — hyper'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` verspreidt de `map` over threads maar houdt de resultaten in hun oorspronkelijke volgorde, dus gedraagt het zich net als een gewone `map` — elk element kwadrateren geeft `(1 4 9 16)`.

</div>

{% include nav.html %}
