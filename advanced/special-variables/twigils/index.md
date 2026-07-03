---
title: Twigils
---

{% include menu.html %}

A _twigil_ is a character placed between the sigil and the name of a variable. It does not change the name; it changes how the variable behaves and is resolved. The common ones are:

* `*` — a **dynamic** variable, e.g. `$*OUT`, looked up through the call stack
* `?` — a **compile-time** value provided by the compiler, e.g. `$?FILE`, `$?LINE`
* `!` — a **private** attribute of an object, e.g. `$!balance`
* `.` — an attribute reached through its accessor method, e.g. `$.name`

You have already met several of these without naming the twigil: `$*OUT` and `$*IN` (dynamic), and `$!`/`$.` in [the part on objects](/oop).

The compiler-provided `?` variables are filled in as your program is compiled:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Each twigil signals a different kind of variable at a glance, so reading `$*foo` you immediately know it is dynamic, and `$?foo` that it is a compile-time constant. The next topic looks at [dynamic variables](/advanced/special-variables/dynamic-variables) in detail, since they behave quite differently from the lexical variables you have used so far.

{% include nav.html %}
