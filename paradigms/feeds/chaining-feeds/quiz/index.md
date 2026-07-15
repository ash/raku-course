---
title: 'Quiz — Feeds'
---

{% include menu.html %}

What does the following program print?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

The feed sends the list into `map(* + 5)`, which adds five to each element, and collects the result into `@r`. So `@r` is `[15 25 35]`.

</div>

{% include nav.html %}
