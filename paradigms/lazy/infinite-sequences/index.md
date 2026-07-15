---
title: Infinite sequences
---

{% include menu.html %}

Replace the end value with a `*` and the sequence becomes **infinite** — it has no last element. Because the list is lazy, this is perfectly safe: nothing is computed until you take it.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

The series of powers of two goes on forever, but `.head(5)` pulls only the first five. The range `1..*` is the simplest infinite sequence — all the integers from one:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

You can even define a sequence in terms of its own earlier elements. The Fibonacci sequence, where each number is the sum of the previous two, is famously a one-liner:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

The closure `* + *` takes the two previous elements and adds them. Storing the sequence in `@fib` is fine here because the `...` operator marks it as lazy, so the array does not try to compute all of it — only the ten elements asked for by `@fib[^10]` are ever produced.

The rule of thumb: an infinite sequence is safe as long as you only ever pull a finite slice from it.

{% include nav.html %}
