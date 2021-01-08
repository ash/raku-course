---
title: Quiz — Named parameters
---

{% include menu.html %}

Consider a function:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

What are the valid ways to call it?

{:.quiz}
0 | f(1, 2) | Positional arguments passed, not named.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Assignment operator instead of a pair constructor.
1 | f(b => 2, a => 1)

## 2

For the same function, what do the following calls return?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` returns&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` returns&nbsp; (: 1, −1 :) | The order of named arguments does not matter.
1 | `f(a => 2, b => 1)` returns&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}
