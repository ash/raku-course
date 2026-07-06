---
title: The solution of ’File or directory?‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 You can find the source code in the file [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Output

```
True
False
```

## Comments

1. `.f` tests for a regular file, so it returns `True` for `a.txt`.

1. `.d` tests for a directory. Asked about the very same path, it returns `False`, because `a.txt` is a file, not a directory. The two tests are complementary, which is how you tell a file and a directory apart.

{% include nav.html %}
