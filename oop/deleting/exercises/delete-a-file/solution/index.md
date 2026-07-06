---
title: The solution of ’Delete a file‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 You can find the source code in the file [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Output

```
True
False
```

## Comments

1. `spurt` creates the file, so the first `.e` test reports `True`.

1. `unlink` deletes it. The second `.e` test then reports `False`, because the file is gone. Note the use of `.e` rather than `.f`: the type test `.f` would throw on a path that no longer exists, while `.e` simply answers `False`.

{% include nav.html %}
