---
title: The solution of ’Even, odd, or zero‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 12;

given $n {
    when 0      { say 'zero' }
    when $_ %% 2 { say 'even' }
    default     { say 'odd' }
}
```

🦋 You can find the source code in the file [sign-of-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/sign-of-a-number.raku).

## Output

```
even
```

## Comments

1. `when 0` matches the single value zero. It comes first because zero is also even, and we want to report it on its own.

1. `when $_ %% 2` is a condition, where `$_` is the topic set by `given`: the `%%` operator tests whether it divides evenly by two. The value `12` is not zero but is divisible by two, so the program prints `even`.

1. `default` covers everything left over — the numbers that are neither zero nor even, that is, the odd ones.

{% include nav.html %}
