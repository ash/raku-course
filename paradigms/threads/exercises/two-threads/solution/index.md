---
title: The solution of ’Two threads‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 You can find the source code in the file [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Output

```
500
```

## Comments

1. The two threads run concurrently, each writing its result into its own shared variable.

1. Reading `$x` and `$y` happens only **after** both `.finish` calls, so the results are guaranteed to be ready: `100 + 400` is `500`. Joining before reading is what makes the value reliable.

{% include nav.html %}
