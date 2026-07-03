---
title: The solution of ’Dump a typed variable‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my Int $n = 42;
dd $n;
```

🦋 You can find the source code in the file [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Output

```
Int $n = 42
```

## Comments

1. Because the variable has a declared type, `dd` prints that type before the name: `Int $n = 42`.

1. An untyped variable would be dumped as just `$n = 42`, without the type.

{% include nav.html %}
