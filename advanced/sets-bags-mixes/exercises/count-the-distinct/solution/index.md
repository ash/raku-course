---
title: The solution of ’Count the distinct‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 You can find the source code in the file [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Output

```
7
```

## Comments

1. Passing the array to `set` builds a set of its values. Because a set keeps only distinct values, the repeated numbers collapse into one.

1. The `elems` method then returns the number of distinct values, which is `7`.

{% include nav.html %}
