---
title: 'Quiz — Enumerations'
---

{% include menu.html %}

What does the following program print?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Each constant stands for a number, assigned from zero in the order listed: `red` is `0`, `green` is `1`, `blue` is `2`. In an arithmetic context the constants act as those numbers, so `green + blue` is `1 + 2`, which is `3`.

</div>

{% include nav.html %}
