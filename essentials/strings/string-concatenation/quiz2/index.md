---
title: 'Quiz 1: Concatenating strings and numbers'
---

{% include menu.html %}

Notice that Raku will automatically convert a number if you want to concatenate it to a string. In each of the parts below, check the lines that print the given string.

## 1

Which lines print `Alpha2`?

{:.quiz}
1 | say &apos;Alpha2&apos;;
0 | say &apos;Alpha&apos; 2; | A space is a syntax error here.
1 | say &apos;Alpha&apos;, &apos;2&apos;; | There is no string concatenation, but the result is correct.
1 | say &apos;Alpha&apos; ~ &apos;2&apos;;
1 | say &apos;Alpha&apos; ~ 2; | A number is converted to a string and then is concatenated.
0 | say &apos;Alpha&apos; + 2; | A `+` does not concatenate strings.
0 | say &apos;Alpha&apos; . 2; | Neither does a `.`.

## 2

Which lines print `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | String concatenation here, even for numbers.
0 | say 1 + 2 + 3; | A regular arithmetical expression.
1 | say &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | Single characters are also strings.
0 | say &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | As there is a `+`, the strings are converted to numbers.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ &apos;&apos;; | `''` is an empty string, so appending it does not change the result.

{% include quiz.html %}

{% include nav.html %}
