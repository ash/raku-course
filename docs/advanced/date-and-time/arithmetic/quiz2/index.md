---
title: 'Quiz — Adding months'
---

{% include menu.html %}

What does the following program print?

```raku
say Date.new(2026, 1, 31).later(:months(1));
```

{:.quiz}
1 | 2026-02-28
0 | 2026-03-03
0 | 2026-02-31
0 | 2026-03-31

{% include quiz.html %}

<div class="extended-explanation">

One month after 31 January would be "31 February", which does not exist. `later` clamps the result to the last valid day of the target month, so it lands on 28 February 2026 (2026 is not a leap year, so February has 28 days).

</div>

{% include nav.html %}
