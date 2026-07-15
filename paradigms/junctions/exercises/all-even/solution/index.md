---
title: The solution of ’All even‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so all(2, 4, 6) %% 2;
```

🦋 You can find the source code in the file [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Output

```
True
```

## Comments

1. The test autothreads: `%% 2` is applied to each value, and the `all` junction requires every one to pass.

1. All three numbers are even, so the result is `True`. If even one were odd, it would be `False`.

{% include nav.html %}
