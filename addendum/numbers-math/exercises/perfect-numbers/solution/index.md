---
title: The solution of ’Perfect numbers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 You can find the source code in the file [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Output

```
[6 28]
```

## Comments

1. `(1..^$n).grep($n %% *)` keeps the numbers below `$n` that divide it evenly —
its proper divisors. The `%% *` is a Whatever function that tests divisibility.

1. `[+]` sums those divisors, and the outer `grep` keeps only the numbers that are
equal to that sum.

{% include nav.html %}
