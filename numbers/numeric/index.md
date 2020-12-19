---
title: Scientific notation in Raku
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers)

# Floating-point numbers

In the previous section, we saw that numbers such as `1.5` are rational numbers. To make a number that corresponds to a `double` number in C++, use scientific notation:

    1E0
    314e-2
    -5e-20
    5.424E40
    7.6e+15

In this case, Raku creates instances of the `Num` data type and internally stores the data as an IEEE number.

## Built-in constants

There are a few constants that you can use straight ahead, which are also the numbers of the `Num` type. Both ASCII and Unicode variants are available:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | equals to `2 * π`
`e` | `𝑒` | 2.718281828459045

## Course navigation

← [Numbers](/raku-course/numbers) / [Rational numbers](/raku-course/numbers/rats) | 💪 [Assignmnets](../assignments) →
