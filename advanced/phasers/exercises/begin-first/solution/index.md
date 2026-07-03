---
title: The solution of ’Begin first‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 You can find the source code in the file [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Output

```
5
```

## Comments

1. `BEGIN { 2 + 3 }` runs during compilation and yields `5`. Used as an expression, a `BEGIN` block hands back its value, which is assigned to `$compiled`.

1. The computation happens only once, at compile time; by run time `$compiled` simply holds the constant `5`. This is how `BEGIN` is used to precompute values, not just to print early.

{% include nav.html %}
