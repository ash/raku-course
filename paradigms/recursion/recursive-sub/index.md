---
title: A recursive subroutine
---

{% include menu.html %}

A _recursive_ subroutine is one that calls itself. The classic example is the factorial: the factorial of `n` is `n` times the factorial of `n - 1`.

```raku
sub fact($n) {
    $n <= 1 ?? 1 !! $n * fact($n - 1);
}

say fact(5); # 120
```

Read the body as two cases joined by the ternary operator `?? !!`:

* when `$n` is `1` or less, the answer is simply `1`;
* otherwise, the answer is `$n` times `fact($n - 1)` — the same subroutine called with a smaller number.

Each call peels off one factor and asks for a smaller factorial, until the number reaches `1` and the calls unwind: `fact(5)` is `5 * fact(4)`, which is `5 * 4 * fact(3)`, and so on down to `1`.

Recursion expresses many problems very directly. Whenever a task can be described in terms of a smaller version of itself, a recursive subroutine is often the most natural way to write it.

{% include nav.html %}
