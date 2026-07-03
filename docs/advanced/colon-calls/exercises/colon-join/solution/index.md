---
title: The solution of ’Join with a colon‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say <a b c>.reverse.join: '-';
```

🦋 You can find the source code in the file [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Output

```
c-b-a
```

## Comments

1. `.reverse` keeps its ordinary form because it is in the middle of the chain. `join` comes last, so it can use the colon, passing `'-'` exactly as `join('-')` would.

1. The list reversed to `c, b, a` is then joined with dashes, giving `c-b-a`. The colon form works with ordinary values, not only blocks.

{% include nav.html %}
