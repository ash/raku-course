---
title: The solution of ’After each step‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $sum = 0;

for 1..3 {
    NEXT say "sum so far: $sum";
    $sum += $_;
}
```

🦋 You can find the source code in the file [next-phaser.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/next-phaser.raku).

## Output

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Comments

1. The `NEXT` phaser is written first, but it runs at the *end* of each iteration — after the body has added the current number to `$sum`.

1. So after the first pass `$sum` is `1`, after the second it is `3`, and after the third it is `6`. `NEXT` is the loop counterpart of running something between iterations, distinct from `FIRST` (once at the start) and `LAST` (once at the end).

{% include nav.html %}
