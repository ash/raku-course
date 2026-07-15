---
title: The solution of ’Feed the big numbers‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 You can find the source code in the file [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Output

```
[6 7 8 9 10]
```

## Comments

1. The feed sends `1..10` into `grep`, which keeps the numbers greater than `5`.

1. The result flows into `@big`, the target that ends the feed.

{% include nav.html %}
