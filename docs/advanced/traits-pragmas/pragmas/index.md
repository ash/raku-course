---
title: Pragmas
---

{% include menu.html %}

A _pragma_ looks like a module loaded with `use`, but instead of bringing in code it changes a compilation rule for the rest of the current scope. Turn one on with `use` and (where it makes sense) off with `no`.

The most important pragma, `strict`, is **on by default** in Raku: it requires every variable to be declared before use, which is why a typo in a variable name is caught rather than silently creating a new variable.

Turning `strict` off with `no strict` lifts that requirement, so you can assign to a variable that was never declared with `my`:

```raku
no strict;

$x = 42;
say $x; # 42
```

With the default `strict` in force, that bare `$x = 42` would be a compile-time error — *Variable '$x' is not declared*. The `no strict` line relaxes the rule for the rest of the enclosing scope.

Other pragmas include `fatal` (which turns a quiet failure into a thrown exception — handy once you have met exception handling), `isms` (to allow idioms borrowed from other languages), and `variables` (to tune variable rules). A pragma’s effect is _lexical_ — it lasts only to the end of the block it appears in — so you can tighten or loosen a rule for exactly the region of code where you want it.

One pragma takes an argument: `lib` adds a directory to the list Raku searches when loading modules — the in-program equivalent of the `-I` command-line option:

```raku
use lib 'lib';
```

You will reach for it once you start writing and loading your own [modules](/advanced/modules-basics/using-modules).

{% include nav.html %}
