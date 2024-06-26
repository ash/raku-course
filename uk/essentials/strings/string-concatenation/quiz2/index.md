---
title: 'Quiz 1: Concatenating strings and numbers'
---

{% include menu.html %}

Raku automatically converts a number if you want to concatenate it to a string. In each of the parts below, select the lines that print the required string.

## 1

Which of the lines print `Alpha2`?

{:.quiz}
1 | say 'Alpha2';
0 | say 'Alpha' 2; | A space is a syntax error here.
1 | say 'Alpha', '2'; | There is no string concatenation, but the result is correct.
1 | say 'Alpha' ~ '2';
1 | say 'Alpha' ~ 2; | A number is converted to a string and then concatenated.
0 | say 'Alpha' + 2; | A `+` does not do string concatenation.
0 | say 'Alpha' . 2; | Neither does a `.`.

## 2

Which of these lines print `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | String concatenation here, even for numbers.
0 | say 1 + 2 + 3; | A regular arithmetical expression.
1 | say '1' ~ '2' ~ '3'; | Single characters are also strings.
0 | say '1' + '2' + '3'; | As there is a `+`, the strings are converted to numbers.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ ''; | `''` is an empty string, so appending it does not change the result.

{% include quiz.html %}

{% include nav.html %}