---
title: The solution of ’A counter‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 You can find the source code in the file [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Output

```
10
20
30
```

## Comments

1. The closure captures two things from `make-counter`: the parameter `$step` and the private variable `$n`. Both stay alive after `make-counter` returns.

1. Each call adds `$step` to `$n` and returns the new total. A counter built with a different step would advance by that amount instead.

{% include nav.html %}
