---
title: The solution of ’Sum with pull-one‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 You can find the source code in the file [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Output

```
15
```

## Comments

1. `.iterator` gives the pull-based view of the list, and each `pull-one` returns the next number.

1. The value is **bound** with `:=`, not assigned, so `$v =:= IterationEnd` can spot the end correctly — an assigned `=` would compare the container instead of the value. The loop adds `3`, `7`, and `5`, then meets `IterationEnd` and stops, leaving `15`.

{% include nav.html %}
