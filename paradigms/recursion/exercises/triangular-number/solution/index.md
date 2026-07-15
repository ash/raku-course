---
title: The solution of ’Triangular number‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 You can find the source code in the file [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Output

```
15
```

## Comments

1. The base case is a candidate of its own: `multi tri(0)` matches only when the argument is exactly `0` and returns `0` without recursing.

1. Every other call lands in `multi tri($n)`, which adds `$n` to the triangular number of `$n - 1`. The calls descend `5 + 4 + 3 + 2 + 1 + 0`, and when the argument reaches `0` dispatch switches to the base-case candidate and the sum unwinds to `15`.

{% include nav.html %}
