---
title: 'Quiz — Date arithmetic'
---

{% include menu.html %}

What does the following program print?

```raku
say Date.new(2026, 1, 28) + 5;
```

{:.quiz}
1 | 2026-02-02
0 | 2026-01-33
0 | 2026-02-05
0 | 2026-02-03

{% include quiz.html %}

<div class="extended-explanation">

Adding an integer moves the date forward by that many days, rolling into the next month automatically. Five days after 28 January 2026 lands on 2 February — January's remaining three days (29, 30, 31) plus two more.

</div>

{% include nav.html %}
