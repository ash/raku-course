---
title: 'Quiz — make'
---

{% include menu.html %}

Inside an action method, which function attaches a value to the current match?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` stores a value on the match; `made` (or `.ast`) reads it back afterwards. So an action method computes its result and passes it to `make`.

</div>

{% include nav.html %}
