---
title: The solution of ’Clear a directory‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 You can find the source code in the file [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Output

```
False
```

## Comments

1. `rmdir` only removes an empty directory, so the files have to go first. `'cache'.IO.dir` lists the entries, and `.unlink for …` deletes each one.

1. With the directory now empty, `rmdir` removes it. The final `.e` test reports `False`, confirming that `cache` is gone.

{% include nav.html %}
