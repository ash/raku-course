---
title: The solution of ’Powers of three‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1, * * 3 ... *).head(5);
```

🦋 You can find the source code in the file [powers-of-three.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/powers-of-three.raku).

## Output

```
(1 3 9 27 81)
```

## Comments

1. The closure `* * 3` is the rule for the next term: take the current one and multiply by three. Giving the rule explicitly is more reliable than letting the operator guess from the first few terms.

1. The `*` endpoint makes the series infinite, and `.head(5)` takes the first five.

{% include nav.html %}
