---
title: The solution of ’A frugal match‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 You can find the source code in the file [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Output

```
｢"hi"｣
```

## Comments

1. The `?` after `.+` makes the quantifier frugal, so it matches as few characters as possible.

1. It therefore stops at the first closing `"`, capturing just `"hi"`. A greedy `.+` would have run all the way to the last `"` and matched `"hi" and "bye"`.

{% include nav.html %}
