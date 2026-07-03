---
title: 'Quiz — Quoting adverbs'
---

{% include menu.html %}

What does the following program print?

```raku
my $price = 5;
say qq:!s{costs $price};
```

{:.quiz}
0 | costs 5
1 | costs $price
0 | costs
0 | costs {5}

{% include quiz.html %}

<div class="extended-explanation">

`qq` normally interpolates scalars, but an adverb written with a `!` turns a feature *off*. Here `:!s` disables scalar interpolation, so `$price` is left exactly as written instead of being replaced by `5`.

</div>

{% include nav.html %}
