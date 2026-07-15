---
title: The solution of ’The Tribonacci sequence‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 You can find the source code in the file [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Output

```
(1 1 1 3 5 9 17 31)
```

## Comments

1. The closure `* + * + *` adds the three previous elements to produce the next, so three starting values are needed.

1. The sequence is lazy, so storing it in `@trib` and asking for `@trib[^8]` computes only the first eight numbers.

{% include nav.html %}
