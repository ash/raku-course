---
title: 'Quiz: Rational numbers'
---

{% include menu.html %}

Mark the numbers, which are `Rat` in Raku.

{:.quiz}
1 | 3/64 | This is a `Rat` number, not a division of two integers.
1 | ⅞
0 | ↉ | This is an `Int` number, and its value is `0`.
1 | 2.718281828459045 | That‘s an approximate value of the Euler constant, but this is a `Rat` still, as it is not infinitely long.
1 | 10_230/50_245 | You can use the `_` separate here too.
1 | 10.345_678 | And here.
0 | 10.345,678 | A comma here is neither a decimal comma nor a separator.
1 | <33/44> | Another form of writing rational numbers in Raku.
0 | <33 44> | This is a list of strings (we’ll see it further in the course).
0 | &apos;<33 44>&apos; | This is a string.
1 | ⅞/⅚ | This is a division of two `Rat` numbers, but the result is also a `Rat` number.

{% include quiz.html %}

{% include nav.html %}
