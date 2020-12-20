---
title: Operations with numbers
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers)

# Operations with numbers

There is no doubt you already know some of the operations that you can do with numbers in Raku. Just to mention that the symbol of the _operation_ is called _operator_. The objects on which we perform operations are called _operands_.

## Arithmetics

**Operator** | **Operation**
`+` | Addition
`-` | Subtraction
`*` | Multiplication
`/` | Division

As Raku [supports Unicode](/raku-course/on-unicode) really well, some of these operators have non-ASCII equivalents:

`×` | Multiplication
`÷` | Division

To change the order of execution, use parentheses:

    say 3 * 4 + 5;   # 17
    say 3 * (4 + 5); # 27

## Modulo

The modulo operator is `%` as in many other languages.

`%` | Modulo

It returns the remainder of integer division of two numbers, so `10 % 3` is `1`. Note that `-10 % 3` is `2` as the result of the operation is defined as the difference between the first number and the rounded-down division multiplied by the second number. So, `$a % $b` is equivalent to `$a - $b * floor($a / $b)`.

## Integer operations

There are special operations that return integer results. Their operators are words instead of symbols.

`div` | Integer division
`mod` | Integer modulo

The `div` operator rounds down the result, so `10 div 3` is `3`, and `-10 div 3` is `-4`.

Both `div` and `mod` expect integer operands. So, the following program will not work if you uncomment the lines maked as `Error`:

    say 10.3 % 3;     # OK
    # say 10.3 mod 3; # Error

    say 10.3 / 3.3;     # OK
    # say 10.3 mod 3.3; # Error

## Course navigation

← [Numbers](/raku-course/numbers) / [Integer numbers](/raku-course/numbers/integers) | 💪 [Exercises](../exercises) →
