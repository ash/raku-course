---
title: The solution of ’List the symbols‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

The program, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 You can find both source files in the [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols) directory.

## Output

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Comments

1. `Circle::` is the package of the module, and `.keys` lists the names it contains, each including its sigil.

1. `.elems` counts those names — the module defines two `our` variables, so the count is `2`.

1. `.keys` does not guarantee any particular order, so we apply `.sort` to get a stable, alphabetical result `($pi $tau)`. Without sorting, the two names could come out in either order between runs.

{% include nav.html %}
