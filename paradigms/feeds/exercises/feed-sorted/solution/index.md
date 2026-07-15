---
title: The solution of ’Sort with a feed‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 You can find the source code in the file [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Output

```
[1 2 3]
```

## Comments

1. The feed sends the three numbers into `sort`, which orders them.

1. The sorted result flows into `@sorted`.

{% include nav.html %}
