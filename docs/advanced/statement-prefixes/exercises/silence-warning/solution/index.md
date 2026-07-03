---
title: The solution of ’Silence a warning‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $name;

my $greeting = quietly { "Hello, " ~ $name ~ "!" };
say $greeting;
```

🦋 You can find the source code in the file [silence-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/silence-warning.raku).

## Output

```
Hello, !
```

## Comments

1. Interpolating the undefined `$name` into the string normally triggers a “use of uninitialized value” warning. Wrapping the expression in `quietly` suppresses it, so only the greeting is printed.

1. Like `do`, `quietly` returns the value of its block, so the assembled string (with the missing name leaving an empty gap) is stored in `$greeting`.

1. `quietly` only hides the warning — the value is still undefined. If instead you want to *deal* with the missing value, supply a default with the defined-or operator `//`: `$name // 'friend'` yields `'friend'` when `$name` is undefined, so `"Hello, " ~ ($name // 'friend') ~ "!"` prints `Hello, friend!` with no warning at all.

{% include nav.html %}
