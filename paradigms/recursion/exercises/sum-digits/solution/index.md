---
title: The solution of ’Sum of digits‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub sum-digits($n) {
    $n < 10 ?? $n !! $n % 10 + sum-digits($n div 10);
}

say sum-digits(1234);
```

🦋 You can find the source code in the file [sum-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/sum-digits.raku).

## Output

```
10
```

## Comments

1. The base case is a single-digit number, which is its own digit sum.

1. Otherwise `$n % 10` is the last digit and `$n div 10` drops it; `1 + 2 + 3 + 4` is `10`.

{% include nav.html %}
