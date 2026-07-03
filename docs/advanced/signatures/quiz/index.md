---
title: 'Quiz — Slurpy parameters'
---

{% include menu.html %}

What does the following program print?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Fixed parameters are filled before the slurpy one. `$first` takes `'a'`, and only the two remaining arguments `'b'` and `'c'` go into `@rest`, so its `.elems` is `2`.

</div>

{% include nav.html %}
