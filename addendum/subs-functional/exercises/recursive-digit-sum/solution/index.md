---
title: The solution of ’Digit sum by recursion‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub digit-sum($n) {
    return $n if $n < 10;
    return $n % 10 + digit-sum($n div 10);
}

say digit-sum(12345);
```

🦋 You can find the source code in the file [recursive-digit-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/recursive-digit-sum.raku).

## Output

```
15
```

## Comments

1. The base case is a single-digit number, which is its own digit sum. Otherwise
the routine peels off the last digit with `$n % 10` and recurses on the rest,
`$n div 10`.

{% include nav.html %}
