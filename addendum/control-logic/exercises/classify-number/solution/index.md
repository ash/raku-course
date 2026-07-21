---
title: The solution of ’Sign and parity‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for -4, 0, 7 -> $n {
    my $sign   = $n < 0 ?? 'negative' !! $n == 0 ?? 'zero' !! 'positive';
    my $parity = $n %% 2 ?? 'even' !! 'odd';

    say "$n is $sign and $parity";
}
```

🦋 You can find the source code in the file [classify-number.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/classify-number.raku).

## Output

```
-4 is negative and even
0 is zero and even
7 is positive and odd
```

## Comments

1. The sign is chosen with a *chained* ternary: `negative` when below zero,
otherwise `zero` when equal, otherwise `positive`.

1. `$n %% 2` tests divisibility by two, so it is true for even numbers and false
for odd ones. (`0` counts as even.)

{% include nav.html %}
