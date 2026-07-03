---
title: 'Quiz — Prefix or postfix'
---

{% include menu.html %}

You have seen `++` written *after* a variable, as a postfix. It can also be written *before* it. What category is `++` in `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

Category is decided purely by *position*. Written before its single operand, `++$x` is a **prefix** operator — the very same `++` is a postfix when written after, as in `$x++`. Both forms increment `$x`; the prefix one returns the new value, so this prints `6`.

</div>

{% include nav.html %}
