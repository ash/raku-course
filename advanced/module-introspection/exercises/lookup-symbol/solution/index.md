---
title: The solution of ’Look up a symbol‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

The program, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 You can find both source files in the [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol) directory.

## Output

```console
$ raku -I. lookup.raku
3.14
```

## Comments

1. `Circle::` is the module’s stash, and using a name as a key — `Circle::{'$pi'}` — fetches the value stored under it. The key must include the sigil, just as the listed names do.

1. This reaches the same value as the qualified `$Circle::pi`, but because the name is an ordinary string it can be computed at run time rather than written out in the source.

{% include nav.html %}
