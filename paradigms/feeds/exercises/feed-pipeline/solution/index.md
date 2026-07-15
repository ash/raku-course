---
title: The solution of ’A feed pipeline‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 You can find the source code in the file [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Output

```
[8 10 12 14 16]
```

## Comments

1. The first stage keeps the numbers greater than `3` (that is `4, 5, 6, 7, 8`); the second doubles each one.

1. Each `==>` passes its result to the next stage, and the last collects it into `@result`.

{% include nav.html %}
