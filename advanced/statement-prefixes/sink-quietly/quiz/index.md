---
title: 'Quiz — Statement prefixes'
---

{% include menu.html %}

What does the following program print?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Adding `10` to the undefined `$v` treats it as `0`, giving `10`. Normally this would also print an “uninitialized value” warning, but the `quietly` prefix suppresses that, so only `10` is printed.

</div>

{% include nav.html %}
