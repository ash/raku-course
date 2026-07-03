---
title: 'Solution: Leap year'
---

{% include menu.html %}

## Disclaimer

The solution shown below aims to train you using conditional checks. In real life, you can learn the methods of the built-in `Date` class. We will learn it in the second part of the course.

## Solution

The algorithm of the detection if a year is leap:

1. if year is not divisible by 4 => common year
1. if year is not divisible by 100 => leap year
1. if year is not divisible by 400 => common year
1. else => leap year

Note that you can use the built-in types for working with date and time, so we’ll return to this task in the second part of the course.

## Code 1

The first solution reproduces the above steps literally:

```raku
my $year = prompt 'Year: ';

if $year % 4 {
    say 'Common year';
}
elsif $year % 100 {
    say 'Leap year';
}
elsif $year % 400 {
    say 'Common year';
}
else {
    say 'Leap year';
}
```

🦋 Find the program in the file [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Code 2

In the second solution, the logic is packed to a single expression. Parentheses are not always needed but added here for clarity.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Find the program in the file [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Output

Try both programs with the most critical cases, for example, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Year: 1900
Common year

$ raku exercises/conditional-checks/leap-year.raku
Year: 2000
Leap year
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2020
Leap year

$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2021
Common year
```

%%tipblock
## `%%` vs `%`

Note that in Boolean contexts, the `%%` and `%` operators are complementary. You can use this fact to choose one of the operators to avoid explicit comparison with zero.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # Flase
```
%%/tipblock

{% include nav.html %}
