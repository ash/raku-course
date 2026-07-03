---
title: The solution of ’A package‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 You can find the source code in the file [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Output

```
0
212
```

## Comments

1. Both the variable and the subroutine are declared with `our`, so both become part of the `Temperature` namespace and are reachable from outside.

1. The variable is reached as `$Temperature::freezing` — sigil, package name, then variable name — while the subroutine is called as `Temperature::fahrenheit(100)`. Converting `100` gives `100 * 9/5 + 32`, which is `212`.

1. A plain `package` provides just the namespace. For a reusable library we would have used `module` instead — and, once objects are on the table, a `class` — but the namespace mechanism is the same in each case.

{% include nav.html %}
