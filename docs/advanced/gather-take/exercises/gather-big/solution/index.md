---
title: The solution of ’Gather until full‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
```

🦋 You can find the source code in the file [gather-big.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/gather-big.raku).

## Output

```
[1 2 3 4]
```

## Comments

1. The loop is given a range of a hundred numbers, far more than it will use. That is fine because the loop stops itself: as soon as `$sum` passes `10`, `last` breaks out and the remaining numbers are never visited.

1. The order inside the block matters. We add to `$sum` first and check the limit before taking, so the number that tips the total over `10` (here, `5`) is not collected. The running total reaches exactly `10` after `4`, so the gathered list is `1, 2, 3, 4`.

1. This early exit with `for` is what `gather`/`take` can do and `grep` cannot: `grep` always scans the whole list, while here we choose when to stop.

{% include nav.html %}
