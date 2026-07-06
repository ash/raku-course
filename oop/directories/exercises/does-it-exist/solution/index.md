---
title: The solution of ’Does it exist?‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 You can find the source code in the file [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Output

```
False
True
```

## Comments

1. `.e` tests whether a path exists. The first check runs before the file is created, so it returns `False`.

1. `spurt` then creates `test.txt`, and the second check on the *same* path now returns `True`. Asking the path object again reflects the current state of the file system.

{% include nav.html %}
