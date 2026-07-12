---
title: 'Quiz — Smartmatch'
---

{% include menu.html %}

What does the following program print? Note that there is no `so` this time, and the match uses the `m/.../` form.

```raku
say 'the cat sat' ~~ m/sat/;
```

{:.quiz}
0 | True
0 | False
1 | ｢sat｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`m/sat/` matches the same way `/sat/` would. Without `so` to coerce it to a Boolean, the smartmatch returns the match object itself, which `say` prints between corner brackets as `｢sat｣`.

</div>

{% include nav.html %}
