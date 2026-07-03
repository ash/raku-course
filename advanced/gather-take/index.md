---
title: '`gather` and `take`'
---

{% include menu.html %}

The `gather` and `take` pair is a flexible way to build a list. You wrap some code in a `gather` block, and every time that code calls `take`, the value is added to the list that `gather` produces.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

The three `take` calls contribute three values, and `gather` collects them into the list stored in `@result`.

The real strength of this pair shows when the `take` calls are spread through ordinary control flow, such as a loop with a condition. The list then contains only the values you chose to take:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Here the loop runs over the numbers from 1 to 10, but only the even ones are taken, so `@evens` ends up holding `2, 4, 6, 8, 10`. (The `%%` operator tests whether a number divides evenly.)

This separation is what makes `gather`/`take` so handy: the surrounding code decides _when_ to produce a value, and `gather` quietly gathers whatever is taken.

{% include nav.html %}
