---
title: The solution of ’Filter with a block‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1..10).grep(* > 5).elems;
```

🦋 You can find the source code in the file [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Output

```
5
```

## Comments

1. `grep` takes the block `* > 5` and keeps the numbers for which it is true: `6, 7, 8, 9, 10`.

1. `.elems` counts them, giving `5`.

{% include nav.html %}
