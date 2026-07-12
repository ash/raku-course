---
title: The solution of ’Word or digit‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 You can find the source code in the file [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Output

```
｢5｣
```

## Comments

1. The alternation mixes a literal, `cat`, with a character class, `\d`. The pattern matches whichever alternative is found first in the string.

1. There is no `cat` in `item 5`, but there is a digit, so `\d` matches the `5`.

{% include nav.html %}
