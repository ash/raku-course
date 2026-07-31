---
title: Viktorīna — Lambdas
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

Bultiņas bloks ir lambda, kas savu argumentu pieskaita pati sev. Izsaukta ar `9`, tā atgriež `9 + 9`, kas ir `18`.

</div>

{% include nav.html %}
