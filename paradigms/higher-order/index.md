---
title: Higher-order functions
---

{% include menu.html %}

In Raku, a subroutine is an ordinary value: you can store it in a variable, pass it to another subroutine, and return it as a result. A subroutine that **takes** or **returns** another subroutine is called a _higher-order function_, and it is the heart of functional programming.

You have already used higher-order functions without naming them — `map`, `grep`, and `sort` all take a block of code as an argument. This section shows how to write your own.

These block-taking methods are also a natural place for the _colon call_ form, which lets you drop the parentheses — `(1..10).grep: * %% 2` instead of `(1..10).grep(* %% 2)`. It is introduced in [Calling with a colon](/advanced/colon-calls), and the `*` shorthand it uses is the [Whatever star](/advanced/whatever).

{% include nav.html %}
