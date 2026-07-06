---
title: 'Quiz — Attributes'
---

{% include menu.html %}

What does the following program print?

```raku
class P {
    has $.x = 7;
    has $.y;
}

say P.new(x => 1).y;
```

{:.quiz}
0 | 1
0 | 7
1 | (Any) | The program wants to print `y`, which was never set
0 | an error

{% include quiz.html %}

{% include nav.html %}
