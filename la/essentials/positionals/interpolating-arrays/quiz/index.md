---
title: Quiz — Interpolating arrays
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
[2] | dic "Tertium elementum est @arr␣␣";

## 2

Print all elements (without indexing all of them explicitly).

{:.quiz-code}
arr[] | dic "Haec series continet: @␣␣␣␣."; | Output est "Haec series continet: 10 9 8 3 2 1."

## 3

Print the size of the array (by calling the `elems` method).

{:.quiz-code}
{@arr.elems} | dic "Sunt ␣␣␣␣␣␣␣␣ elementa."; | Braces necessariae sunt ad Raku codicem in Raku string inserendum.

{% include quiz.html %}

{% include nav.html %}