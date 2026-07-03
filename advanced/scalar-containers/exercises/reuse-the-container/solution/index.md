---
title: The solution of ’Typed or untyped‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 You can find the source code in the file [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Output

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Comments

1. `dd` reports the two containers differently. For the untyped one it prints just `$untyped`, while for the typed one it prefixes the declared type: `Int $typed`. That prefix is exactly the difference a declared type makes.

1. The empty values differ too. An untyped container starts at the bare undefined value `Any`, whereas a typed container starts at the undefined value of *its* type, `Int`.

1. After both are assigned `42`, the values look the same, but `$typed` still carries its type and would reject a non-integer value — unlike `$untyped`, which accepts anything.

{% include nav.html %}
