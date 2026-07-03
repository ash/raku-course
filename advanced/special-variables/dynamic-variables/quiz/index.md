---
title: 'Quiz — Dynamic variables'
---

{% include menu.html %}

What does the following program print?

```raku
my $*n = 1;
sub show { say $*n }

sub run {
    my $*n = 2;
    show();
}

run();
```

{:.quiz}
0 | 1
1 | 2
0 | Nothing
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

`show` is written at the top level, right next to `my $*n = 1`, but that placement is irrelevant — a dynamic variable is looked up through the *call stack*, not by where the code sits. Here `show` is called from `run`, which redeclared `$*n` as `2`, so that is the value in effect and the program prints `2`.

</div>

{% include nav.html %}
