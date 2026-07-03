---
title: 'Quiz — Item context'
---

{% include menu.html %}

What does the following program print?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

The `$( … )` contextualiser forces item context, so the array is treated as a single value rather than a list of elements. The `for` loop therefore sees one item and runs its body just once, leaving `$n` at `1`. Without `$( )`, the loop would iterate three times.

</div>

{% include nav.html %}
