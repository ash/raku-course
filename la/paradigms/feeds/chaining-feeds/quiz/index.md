---
title: Quiz — Fluxus
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

Fluxus indicem in `map(* + 5)` mittit, quod quinque unicuique elemento addit, et effectum in `@r` colligit. Itaque `@r` est `[15 25 35]`.

</div>

{% include nav.html %}
