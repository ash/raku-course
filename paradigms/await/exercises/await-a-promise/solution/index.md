---
title: The solution of ’Await a promise‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 You can find the source code in the file [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Output

```
(slow quick medium)
```

## Comments

1. All three jobs start at once and sleep concurrently, so the whole program takes about `0.3` seconds — the duration of the slowest job, not the sum of all three.

1. Although `quick` finishes first and `slow` last, the output is `(slow quick medium)`: `await` returns each result at the same position as its promise in `@jobs`. Completion order affects only *when* `await` returns, never the arrangement of the results.

{% include nav.html %}
