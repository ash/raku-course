---
title: Scientific notation in Raku
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers)

# Scientific notation

In the previous section, we saw that numbers such as `1.5` are rational numbers. To make a number that is similar to a `double` number in other languages, use scientific notation:

    1E0
    314e-2
    -5e-20
    3e40
    3e+40

In this case, Raku creates instances of the `Num` data type and is internally stored as an IEEE number.

## Course navigation

← [Numbers](/raku-course/numbers) / [Rational numbers](/raku-course/numbers/rats) | 💪 [Assignmnets](../assignments) →
