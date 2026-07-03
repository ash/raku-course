---
title: Exercise ’A heredoc‘
---

{% include menu.html %}

## Problem

Using an *interpolating* heredoc, build an order-confirmation letter from a few variables — a customer `$name`, an `$item`, a unit `$price`, and a `$count`. The heredoc should interpolate the variables *and* compute the total inline with an embedded `{ … }` block (`$count * $price`).

Indent the body of the heredoc to line up with the surrounding code, and align the closing terminator with the text so that indentation does not appear in the output. Print the result.

## Example

For `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25`, and `$count = 3`, the program prints, with no leading spaces:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
