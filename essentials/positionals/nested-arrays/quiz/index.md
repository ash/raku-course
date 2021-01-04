---
title: Quiz — Nested arrays
---

{% include menu.html %}

There is an array of array:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Single elements

What do you expect to see in the output at each of the following lines of code?

{:.quiz-code}
5.6 | say @data[1][1]; — ␣␣␣
1.2 | say @data[0][0]; — ␣␣␣
7.8 | say @data[2][2]; — ␣␣␣

## Comparing

Select the correct Boolean result of the following comparisons.

{:.quiz-select}
False | `@data[0][0] == @data[2][2]` is&nbsp; (: False, True :)
True | `@data[1][1] == @data[2][0]` is&nbsp; (: False, True :)

## Lengths

What value do the following calls of the `size` method return?

{:.quiz-select}
4 | `@data.elems` — (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` — (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` — (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` — (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}
