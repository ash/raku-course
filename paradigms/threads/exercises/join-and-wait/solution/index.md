---
title: The solution of ’Join and wait‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 You can find the source code in the file [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Output

```
first
second
```

## Comments

1. `.finish` blocks until the thread has printed `first`.

1. Only then does the main program continue and print `second`, so the order is guaranteed. Without `.finish`, the two lines could appear in either order.

{% include nav.html %}
