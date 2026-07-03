---
title: 'Quiz — Native types'
---

{% include menu.html %}

What does the following program print?

```raku
my int $n = 42;
say $n.^name;
```

{:.quiz}
1 | Int
0 | int
0 | (Int)
0 | Num

{% include quiz.html %}

<div class="extended-explanation">

When you introspect a native value, it is automatically *boxed* into the matching full type. So even though `$n` is declared as a native `int`, asking for its type name through `.^name` reports the boxed `Int`.

</div>

{% include nav.html %}
