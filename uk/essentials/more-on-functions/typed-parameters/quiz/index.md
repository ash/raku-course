---
title: Quiz — Typed parameters
---

{% include menu.html %}

## 1

Given the function:

```raku
sub f(Rat $x) {
    say 2 * $x;
}
```

Which calls are correct?

{:.quiz}
0 | f(3); | Even if `3` can fit in a `Rat` container, the call is wrong as `3` is `Int`, not a `Rat`.
1 | f(3.5);
0 | f(3e0);
0 | f(&apos;3&apos;);
1 | f(<4/5>); | This is a `Rat` number.


## 2

Given the function:

```raku
sub g(Int $a, Str $b) {
    say "Integer $a, string $b";
}
```

Which calls are correct?

{:.quiz}
0 | g(10, 20);
0 | g(&apos;10&apos;, 20); | Even if either argument can be cast, Raku demands the exact type.
1 | g(10, &apos;20&apos;);
0 | g(&apos;10, 20&apos;); | A single string passed.
0 | g(&apos;10&apos;, &apos;20&apos;); 


{% include quiz.html %}

{% include nav.html %}