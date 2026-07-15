---
title: 'Quiz — Transforming a supply'
---

{% include menu.html %}

What does the following program print?

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

`map(* ** 2)` produces a new supply that squares each value. The tap collects `1, 4, 9` into `@out`.

</div>

{% include nav.html %}
