---
title: Quiz — Een operator definiëren
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | een fout

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` definieert een nieuwe operator die tussen zijn twee operanden wordt geschreven. De body vermenigvuldigt ze, dus `6 times 7` evalueert tot `42` — een operator is gewoon een subroutine met een speciale naam.

</div>

{% include nav.html %}
