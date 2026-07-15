---
title: The base case
---

{% include menu.html %}

Every recursive subroutine needs a _base case_: a condition under which it returns an answer **without** calling itself again. Without one, the subroutine would call itself forever.

In the factorial, the base case was “`$n` is `1` or less”. Here is another example, counting down to zero:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

The program prints:

```
3
2
1
```

The first line is the base case: when `$n` drops below `1`, the subroutine returns immediately and the chain of calls ends. The recursive step always moves **towards** the base case by calling `countdown` with a smaller number.

If you forget the base case, or the steps never reach it, the recursion never stops and the program eventually fails. A correct recursive subroutine always has two things: a base case that ends the recursion, and a step that brings each call closer to it.

{% include nav.html %}
