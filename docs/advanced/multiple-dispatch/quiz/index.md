---
title: 'Quiz — Dispatch with `where`'
---

{% include menu.html %}

What does the following program print?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` satisfies the `where $n %% 2` condition, so the more specific candidate is chosen and `even` is printed. The plain `Int` candidate is the catch-all for everything that fails the condition.

</div>

{% include nav.html %}
