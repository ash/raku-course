---
title: The solution of ’Split into even and odd‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @numbers = 1..10;

my @even = @numbers.grep(* %% 2);
my @odd  = @numbers.grep(* % 2);

say "even: @even[]";
say "odd: @odd[]";
```

🦋 You can find the source code in the file [even-odd.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/even-odd.raku).

## Output

```
even: 2 4 6 8 10
odd: 1 3 5 7 9
```

## Comments

1. `* %% 2` is true for numbers divisible by two; `* % 2` is true when the
remainder is non-zero, i.e. odd. Each `grep` keeps one group.

1. Interpolating `@even[]` with the empty-bracket zen slice prints the elements
separated by spaces inside the double-quoted string.

{% include nav.html %}
