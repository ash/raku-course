---
title: 'Quiz — `gather`'
---

{% include menu.html %}

What does the following program print?

```raku
my @r = gather for 1..6 {
    take $_ if $_ %% 3;
};

say @r;
```

{:.quiz}
1 | [3 6]
0 | [1 2 3 4 5 6]
0 | [3]
0 | []

{% include quiz.html %}

<div class="extended-explanation">

`gather` collects only the values that `take` is actually called on. The guard `$_ %% 3` is true only for `3` and `6`, so just those two are taken, giving `[3 6]`.

</div>

{% include nav.html %}
