---
title: The solution of ’Sort with a colon‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 You can find the source code in the file [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Output

```
(fig pear kiwi apple)
```

## Comments

1. The colon passes the sort key to `sort` without needing parentheses around it.

1. `*.chars` is a Whatever expression that stands for “the number of characters of each element”. `sort` uses it as the key, so the words come out shortest first: `fig` (3), then `pear` and `kiwi` (4), then `apple` (5).

1. `pear` keeps its place ahead of `kiwi` because they are the same length and `sort` is stable, preserving the original order of equal keys.

{% include nav.html %}
