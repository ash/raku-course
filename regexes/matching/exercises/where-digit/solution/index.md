---
title: The solution of ’Where is the digit‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 You can find the source code in the file [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Output

```
3
4
```

## Comments

1. The `\d` class matches a single digit. The engine stops at the **first** one it finds — `9`, at index `3` (positions count from zero); the later `2` is never reached.

1. `.from` gives the start of the match, `3`, and `.to` gives the position just after it ends, `4`. The difference `.to - .from` is the length of the match — one character here.

{% include nav.html %}
