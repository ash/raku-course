---
title: The solution of ’Describe a variable‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my Str $lang = 'Raku';

say $lang.^name;
say $lang.VAR.^name;
say $lang.VAR.name;
```

🦋 You can find the source code in the file [describe-a-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/describe-a-variable.raku).

## Output

```
Str
Scalar
$lang
```

## Comments

1. `.^name` returns the type of the value stored in the container, which is `Str`.

1. `.VAR` returns the underlying container, and `.^name` on it returns `Scalar` — the type of the container itself.

1. `.VAR.name` returns the name of the variable, `$lang`, including its sigil. Note that this is the `name` method, not the `^name` meta-method used on the first two lines.

{% include nav.html %}
