---
title: 'Quiz — Closures'
---

{% include menu.html %}

What does the following program print?

```raku
sub make-acc {
    my $total = 0;
    return sub ($x) { $total += $x };
}

my &add = make-acc;
add(10);
add(20);
say add(5);
```

{:.quiz}
0 | 5
0 | 30
1 | 35
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

The returned subroutine closes over `$total`, so all three calls share the same variable. The first two calls bring it to `30`; the third adds `5` and prints the running total, `35`.

</div>

{% include nav.html %}
