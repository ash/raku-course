---
title: Viktorīna — Supply pārveidošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my @out;
Supply.from-list(1, 2, 3).map(* ** 2).tap(-> $v { @out.push($v) });
say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [1 4 9]
0 | [2 4 6]
0 | 14

{% include quiz.html %}

<div class="extended-explanation">

`map(* ** 2)` rada jaunu supply, kas katru vērtību kāpina kvadrātā. Pieslēgums savāc `1, 4, 9` masīvā `@out`.

</div>

{% include nav.html %}
