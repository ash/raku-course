---
title: Choosing the right one
---

{% include menu.html %}

For everyday scalars such as numbers and strings, all three representations look the same. They start to differ for compound or undefined values. Here is a `Pair` shown three ways:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

A rough rule of thumb:

* [`.gist`](../gist) — for output meant to be *read* by a person (`say`, `note`).
* [`.Str`](../str) — for output that is *plain text* (`print`, `put`, interpolation, the `~` operator).
* [`.raku`](../raku-method) — for a *code-like* representation while debugging (`dd`).

Every one of these methods can be given your own definition when you write a class, so your own objects print nicely too. We return to that when we [create classes](/oop/classes) in the next part.

{% include nav.html %}
