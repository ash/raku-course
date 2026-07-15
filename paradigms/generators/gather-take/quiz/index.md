---
title: 'Quiz — gather and take'
---

{% include menu.html %}

What does the following program print?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

The `take` runs only when `$_ > 3`, so only `4` and `5` are added to the list. Everything else is skipped, giving `[4 5]`.

</div>

{% include nav.html %}
