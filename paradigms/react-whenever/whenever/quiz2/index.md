---
title: 'Quiz — whenever and done'
---

{% include menu.html %}

What does the following program print?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

The first `whenever` pushes `1`, then `2` — and on `2` it calls `done`. The crucial point is that `done` ends the **entire `react` block**, not just its own `whenever`: the rest of the first supply (`3`) and the *whole second supply* (`10, 20`) are cut off before they are delivered. So `@out` holds just `[1 2]`. If `done` only silenced its own stream, you would have seen `[1 2 10 20]` — but one `done` stops all the reactions at once.

</div>

{% include nav.html %}
