---
title: 'Quiz — `when`'
---

{% include menu.html %}

What does the following program print?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

A `when` block automatically *breaks out* of the `given` after it matches — there is no fall-through. `5` satisfies the first condition `$_ > 0`, so `positive` is printed and the second `when 5` is never reached, even though it would also have matched.

</div>

{% include nav.html %}
