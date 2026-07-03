---
title: Multiple dispatch
---

{% include menu.html %}

In the Essentials part you met [_multi-functions_](/essentials/more-on-functions/multi-functions): several subroutines that share a name, where Raku picks the right one by looking at the types of the arguments. This mechanism is called _multiple dispatch_.

So far, the choice was made by the _type_ of the arguments. A `where` clause lets you go further and dispatch on the _value_ as well. It is written after a parameter and holds a condition that the argument must satisfy for that candidate to be chosen:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Each call goes to the candidate whose condition is true for the given value:

```
-5 is negative
0 is zero
7 is positive
```

All three candidates have the same signature as far as types go — a single `Int` — so without the `where` clauses they would clash. The conditions make them distinct.

## A base case for recursion

A common use of `where` is to provide the stopping point of a recursion as a separate candidate. Here is the factorial again, split into two multi-subs:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

The first candidate handles the base case (`$n` of `1` or less) and simply returns `1`. Every other value goes to the second candidate, which calls `fact` again with a smaller number. There is no `if` inside the function — the choice of base case versus recursive step is made by the dispatcher.

{% include nav.html %}
