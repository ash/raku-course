---
title: 'Quiz — react'
---

{% include menu.html %}

What does the following program print?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

The `whenever` body collects each value, but calls `done` as soon as it sees `3`. `done` closes the `react` block, so the supply is abandoned and `4` and `5` are never processed, leaving `[1 2 3]`.

</div>

{% include nav.html %}
