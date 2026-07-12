---
title: The solution of ’Two to four‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 You can find the source code in the file [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Output

```
｢abcd｣
```

## Comments

1. `\w ** 2..4` matches from two to four word characters.

1. Being greedy, it takes as many as the range allows — four — so the match is `abcd`.

{% include nav.html %}
