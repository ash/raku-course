---
title: The solution of ’Match a phrase‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 You can find the source code in the file [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Output

```
｢love Raku｣
```

## Comments

1. The space between the words is significant here, so the phrase is wrapped in quotes: `'love Raku'`. Without the quotes, the regex engine would ignore the space and look for `loveRaku`, which is not in the string.

1. The smartmatch returns a match object covering the whole quoted phrase, which `say` prints between corner brackets.

{% include nav.html %}
