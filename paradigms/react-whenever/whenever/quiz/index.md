---
title: 'Quiz — whenever'
---

{% include menu.html %}

What does the following program print?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

The `whenever` body runs for each value, pushing twice its value. The supply emits `1, 2, 3`, so `@out` collects `2, 4, 6`.

</div>

{% include nav.html %}
