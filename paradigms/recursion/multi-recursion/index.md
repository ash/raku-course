---
title: Recursion with multi subs
---

{% include menu.html %}

So far the base case has been a line _inside_ the subroutine — a ternary or an early `return` that checks the argument. Raku offers a more expressive way to write the same thing. Because a subroutine can have several `multi` candidates, you can give the base case and the recursive step **their own separate subroutines**, and let multiple dispatch pick the right one for each call.

Recall the factorial. With `multi`, its two cases become two subroutines:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

The first candidate matches only when the argument is exactly `0` — that literal in the signature _is_ the base case. Every other call goes to the second candidate, which multiplies and recurses. When `fact($n - 1)` finally reaches `0`, dispatch switches to the first candidate, and the chain of calls unwinds. The base case is no longer a branch buried in the body; it is a subroutine that exists for a single value.

Why `0` and not `1`? Because every step subtracts one, any starting number eventually lands exactly on `0`, and `0!` is defined as `1` — so `0` is where the descent truly ends. A literal candidate matches one _exact_ value, so a base of `multi fact(1)` would compute `fact(1)` correctly but leave `fact(0)` to fall through to `multi fact($n)` and recurse past zero forever. Stopping at `0` keeps the subroutine correct for every non-negative whole number, `fact(0)` included.

This reads especially well when there is more than one base case. Fibonacci needs two:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Each base case is its own one-line candidate, and the recursive candidate handles everything else — no nested conditionals.

A literal such as `0` matches only that exact value. When the base case covers a _range_ — “`$n` is `1` or less” — use a `where` constraint instead:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

The constrained candidate is more specific, so Raku tries it first; the plain `$n` candidate catches everything else.

The same discipline as before still applies: every recursive path must reach a base-case candidate. The literal-`0` factorial, for instance, is only safe for non-negative whole numbers — `fact(-1)` would step past `0` and recurse forever, because no candidate ever matches. Splitting the cases across `multi` subs does not remove the need for a base case; it just gives that base case a name and a home of its own.

{% include nav.html %}
