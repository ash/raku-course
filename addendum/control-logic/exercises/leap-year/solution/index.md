---
title: The solution of ’Leap years‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 You can find the source code in the file [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Output

```
2000: leap
1900: common
2024: leap
2023: common
```

## Comments

1. The rule reads directly as a Boolean expression: a leap year is one divisible by
400, *or* one divisible by 4 but not by 100. `%%` is the divisibility test.

1. `1900` is divisible by 100 but not 400, so it is common; `2000` is divisible by
400, so it is leap.

1. Raku's [`Date`](/advanced/date-and-time) type already knows this rule. It exposes
it as `.is-leap-year` — a method on a *date object*, so you make any date in the
year (here 1 January) and ask it:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    The exercise, of course, is about writing the rule yourself.

{% include nav.html %}
