---
title: Quiz — Interpolating arrays
---

{% include menu.html %}

Given the following array:

```raku
my @arr = 10, 9, 8, 3, 2, 1;
```

Complete the below programs to get the requested output.

## 1

Print the third element (the item with index `2`).

{:.quiz-code}
[2] | say &quot;The third element is @arr␣␣&quot;;

## 2

Print all elements (without listing all the individual items).

{:.quiz-code}
arr[] | say &quot;This array contains: @␣␣␣␣.&quot;; | The output is ”This array contains: 10 9 8 3 2 1.“

## 3

Print the size of the array (by calling the `elems` method).

{:.quiz-code}
{@arr.elems} | say &quot;There are ␣␣␣␣␣␣␣␣ elements.&quot;; | Curly braces required to embed Raku code into a Raku string.

{% include quiz.html %}

{% include nav.html %}
