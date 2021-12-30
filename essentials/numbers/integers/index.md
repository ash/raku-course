---
title: Integer numbers in Raku
---

{% include menu.html %}

The `Int` data type represents integer numbers. Numbers can be positive and negatives, and you can use an explicit `+` sign if you want to. Here are a few obvious examples:

```raku
42
-42
100
-5
0
```

Yes, a bare `0` is considered an integer by default.

## Groups of digits

Raku has a cute feature that lets you spell big numbers with some visual helpers that split the digits into groups of thousands:

```raku
1_000_000
-3_141_592
```

Although you can construct a number such as `34_56`, you’d better avoid it as this may confuse other people reading your code. But you cannot have two adjacent underscores, neither you can start nor end the number with it.

## Arbitrary long integers

Raku perfectly handles the numbers beyond the 32- or 64-bit limits. For example, the following program is an acceptable program that multiplies two big integer numbers and prints the correct result.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}
