---
title: The solution of ’The whole string‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 You can find the source code in the file [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Output

```
True
```

## Comments

1. The `^` and `$` anchors pin the pattern to the start and end of the string.

1. Between them, `<[a..z]>+` must account for every character, so a string with a capital letter or a space, such as `Hello there`, would fail.

{% include nav.html %}
