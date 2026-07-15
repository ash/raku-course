---
title: gather and take
---

{% include menu.html %}

A `gather` block collects values. Anywhere inside it — including in loops and subroutines it calls — a `take` adds a value to the list that `gather` produces:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

The `take` runs once for each number `1, 2, 3`, contributing `1`, `4`, and `9`. The whole `gather` block evaluates to the list of everything taken.

`take` can appear under any control flow, which makes `gather` ideal for building a list with conditions:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Here a value is taken only when the `if` succeeds, so only the even numbers end up in the list. This is often clearer than building the list by hand with `push`, because the logic reads as a normal loop and `take` simply marks the values to keep.

{% include nav.html %}
