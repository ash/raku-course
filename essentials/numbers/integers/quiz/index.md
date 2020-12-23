---
title: Quiz — Integer numbers
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers) / [Integer numbers](/raku-course/numbers/integers)

# Quiz — Integer numbers

Mark all the examples with valid integer numbers.

{:.quiz .white}
1 | `42`
1 | `0`
1 | `-42`
1 | `+100` | You can add `+` if you want.
0 | `3.14` | This is a valid number, but not an integer number.
1 | `1000`
1 | `1_000`
1 | `10_000`
0 | `10__000` | Two underscores are not allowed.
0 | `_100` | A number cannot start with underscore.
0 | `100_` | A number cannot end with underscore.
1 | `1_0_0_0` | This is correct, but looks weird.
1 | `10_00` | This is also correct, but is not the best choice.
0 | `50,000` | A comma does not split the number into thousands.
0 | `45 678 901` | Spaces are not allowed inside numbers.

{% include quiz.html %}

## Course navigation

← [Numbers](/raku-course/numbers) / [Integer numbers](/raku-course/numbers/integers) | 💪 [Exercises](../exercises) →
