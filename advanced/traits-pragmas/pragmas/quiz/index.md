---
title: 'Quiz — Pragmas'
---

{% include menu.html %}

With Raku’s default `strict` pragma in force, what happens when you assign to a variable you never declared, as in `$x = 42`?

{:.quiz}
1 | It is a compile-time error
0 | It silently creates `$x`
0 | It prints a warning but runs
0 | It sets `$x` to `Nil`

{% include quiz.html %}

<div class="extended-explanation">

`strict` is on by default and requires every variable to be declared with `my` first, so a bare `$x = 42` fails to compile — *Variable '$x' is not declared*. Turning the pragma off with `no strict` would let the assignment through.

</div>

{% include nav.html %}
