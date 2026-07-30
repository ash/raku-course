---
title: 'Quiz — Een supply omvormen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

`map(* ** 2)` levert een nieuwe supply op die elke waarde kwadrateert. De tap verzamelt `1, 4, 9` in `@out`.

</div>

{% include nav.html %}
