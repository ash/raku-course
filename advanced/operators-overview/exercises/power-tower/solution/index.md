---
title: The solution of ’Power tower‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 2 ** 2 ** 3;
```

🦋 You can find the source code in the file [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Output

```
256
```

## Comments

1. Because `**` is right-associative, the expression groups as `2 ** (2 ** 3)`.

1. That is `2 ** 8`, which is `256` — not `(2 ** 2) ** 3`, which would be `64`.

{% include nav.html %}
