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
[2] | say &quot;Das dritte Element ist @arr␣␣&quot;;

## 2

Print all elements (without indexing all of them explicitly).

{:.quiz-code}
arr[] | say &quot;Dieses Array enthält: @␣␣␣␣.&quot;; | Die Ausgabe ist „Dieses Array enthält: 10 9 8 3 2 1.“

## 3

Print the size of the array (by calling the `elems` method).

{:.quiz-code}
{@arr.elems} | say &quot;Es gibt ␣␣␣␣␣␣␣␣ Elemente.&quot;; | Geschweifte Klammern erforderlich, um Raku-Code in einen Raku-String einzubetten.

{% include quiz.html %}

{% include nav.html %}