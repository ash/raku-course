---
title: Integer numbers in Raku
---

{% include menu.html %}

Integer numbers are represented by the `Int` data type. Numbers can be positive and negatives, and you can use an explicit `+` sign if you want to. Here are a few obvious examples:

    42
    -42
    100
    -5
    0

Yes, a bare `0` is considered an integer by default.

## Groups of digits

Raku has a cute feature that lets you spelling big numbers with some visual helpers that split the digits by groups of thousands:

    1_000_000
    -3_141_592

Although you can construct a number such as `34_56`, you’d better avoid it as this may confuse other people reading your code. But you cannot have two adjacent underscores neither you can start or end the number with it.

## Arbitrary long integers

Raku will perfectly handle numbers that go beyond 32- or 64-bit integers. So, for example, the following program is an acceptable program that will multiply two big integer numbers and print the correct result.

    say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;

## Course navigation

← [Numbers](/raku-course/numbers) | 🤔 [Quiz](quiz) →

Ot jump to the 💪 [exercises](../exercises).