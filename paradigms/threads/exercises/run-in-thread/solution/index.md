---
title: The solution of ’Run in a thread‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 You can find the source code in the file [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Output

```
working
```

## Comments

1. `Thread.start` runs the block on a new thread.

1. `.finish` waits for the thread to complete, so the program does not end before `working` is printed.

{% include nav.html %}
