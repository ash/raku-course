---
title: The solution of ’Count up‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 You can find the source code in the file [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Output

```
1
2
3
```

## Comments

1. The base case `return if $n < 1` still stops the recursion once the count passes zero.

1. The order of the last two lines is what makes it count *up*: each call first recurses all the way down to the base case, and only then prints its own number as the calls unwind. So `1` is printed first and `$n` last.

{% include nav.html %}
