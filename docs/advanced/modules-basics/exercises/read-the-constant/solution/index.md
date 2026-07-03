---
title: The solution of ’Read the constant‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

The program, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 You can find both source files in the [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant) directory.

## Output

```console
$ raku -I. read-pi.raku
3.14
```

## Comments

1. `need Circle` loads the module but does not import any names, so a bare `$pi` would not be recognised.

1. The `our` variable is reached through the module’s name, written as `$Circle::pi`.

{% include nav.html %}
