---
title: Introspecting containers
---

{% include menu.html %}

_Introspection_ means asking a value or a container about itself — its type, its underlying container, and the machinery behind it. You have already used one introspection tool, `.^name`, to print the type of a value.

Raku offers a small family of such tools, written in capital letters: `WHAT`, `VAR`, `WHO`, and `HOW`. They are sometimes called _pseudo-methods_, because the compiler gives them a special meaning rather than treating them as ordinary methods. This section looks at each of them.

As a reminder, here is `.^name` reporting how the type of an untyped container changes as you store different values in it:

```raku
my $value;
say $value.^name; # Any

$value = 42;
say $value.^name; # Int

$value = 'forty-two';
say $value.^name; # Str
```

The container starts as `Any` and then reports the type of whatever value it currently holds.

{% include nav.html %}
