---
title: The solution of ’An accumulator‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 You can find the source code in the file [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Output

```
15
```

## Comments

1. The closure captures `$sum`, which survives between calls.

1. `acc(10)` makes the total `10`; `acc(5)` adds five and returns `15`.

{% include nav.html %}
