---
title: The solution of ’Collatz steps‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $n = 27;
my $steps = 0;

while $n != 1 {
    $n = $n %% 2 ?? $n div 2 !! 3 * $n + 1;
    $steps++;
}

say $steps;
```

🦋 You can find the source code in the file [collatz.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/collatz.raku).

## Output

```
111
```

## Comments

1. The ternary `?? !!` chooses the next value in one expression: halve `$n` when it
is even (`$n %% 2`), otherwise apply `3 * $n + 1`.

1. `27` is a famous small case that takes a surprisingly long detour — `111` steps
— before it finally settles at `1`.

{% include nav.html %}
