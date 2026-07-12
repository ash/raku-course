---
title: The solution of ’Starts with‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 You can find the source code in the file [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Output

```
True
```

## Comments

1. The `^` anchor forces the match to begin at the start of the string, and `\d` then requires that first character to be a digit.

1. Without the `^`, the pattern would also succeed for a digit appearing anywhere later in the string, such as `'apples 3'`.

{% include nav.html %}
