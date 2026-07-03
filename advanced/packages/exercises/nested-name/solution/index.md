---
title: The solution of ’A nested name‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 You can find the source code in the file [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Output

```
10
20
```

## Comments

1. Nesting one namespace inside another builds a longer `::` path. Both the variable and the subroutine live two levels deep, in `Outer::Inner`.

1. The full name `$Outer::Inner::base` reaches the variable, and `Outer::Inner::doubled()` reaches the subroutine through the same two levels. A sub name carries no sigil, so unlike the variable it has no `$` in front.

1. Both members are declared with `our`, which is what makes them visible outside their module. A `my` declaration would have kept them private to `Inner`.

{% include nav.html %}
