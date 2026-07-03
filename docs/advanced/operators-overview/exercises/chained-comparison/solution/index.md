---
title: The solution of ’Chained comparison‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 0 <= 73 <= 100;
```

🦋 You can find the source code in the file [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Output

```
True
```

## Comments

1. Comparison operators can be chained, so `0 <= 73 <= 100` reads as “0 is at most 73, and 73 is at most 100”. The `<=` operator allows the endpoints, so a score of exactly `0` or `100` would also count as valid.

1. Both parts are true, so the whole expression is `True`. Note that the middle value `73` is written only once, even though it is compared with both neighbours.

1. Without the chaining feature, you would have to spell out both comparisons and join them with `&&`, repeating the middle value: `0 <= 73 && 73 <= 100`. The chained form says the same thing more concisely.

{% include nav.html %}
