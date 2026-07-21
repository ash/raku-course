---
title: The solution of ’Running totals‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 You can find the source code in the file [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Output

```
[2 6 12 20]
```

## Comments

1. The block keeps a running `$sum` in a variable outside the map. Each call adds
the current element and returns the new total, so the mapped list is the
sequence of partial sums.

1. Raku has this built in. The [triangular reduction](/advanced/metaoperators/reduction)
`[\+]` keeps every partial sum, so the whole solution is a single expression:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    It returns a `Seq`, so its gist uses parentheses — `(2 6 12 20)` — rather than
    the array's `[2 6 12 20]`, but the numbers are the same.

{% include nav.html %}
