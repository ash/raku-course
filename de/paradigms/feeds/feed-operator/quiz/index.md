---
title: 'Quiz — Der Feed-Operator'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

Der Feed schickt `1..6` in `grep(* > 3)`, das `4, 5, 6` behält und in `@big` ablegt. `@big.elems` ist also `3`.

</div>

{% include nav.html %}
