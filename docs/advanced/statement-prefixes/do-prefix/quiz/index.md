---
title: 'Quiz — do'
---

{% include menu.html %}

What does the following program print?

```raku
my $s = do given -3 {
    when $_ < 0 { 'neg' }
    default     { 'nonneg' }
};
say $s;
```

{:.quiz}
1 | neg
0 | nonneg
0 | -3
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`do` works in front of control structures, not only bare blocks. Here `do given` turns the whole `given`/`when` into an expression. The topic `-3` matches `$_ < 0`, so the expression yields `'neg'`, which is stored in `$s`.

</div>

{% include nav.html %}
