---
title: 'Quiz — hyper'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`.hyper` verteilt das `map` über Threads, hält die Ergebnisse aber in ihrer ursprünglichen Reihenfolge, es verhält sich also wie ein gewöhnliches `map` — jedes Element zu quadrieren ergibt `(1 4 9 16)`.

</div>

{% include nav.html %}
