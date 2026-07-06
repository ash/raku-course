---
title: The solution of ’Make a directory‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 You can find the source code in the file [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Output

```
True
True
```

## Comments

1. `mkdir` creates the directory, and `.IO.d` confirms that `reports` is a directory.

1. Because the directory now exists, we can write a file into it by giving a path that includes the directory name, `reports/data.txt`. Checking `.e` on that path confirms the file was created inside the new directory.

1. The order matters: `spurt` does **not** create missing directories for you. Writing to `reports/data.txt` before the `reports` directory exists fails with an error like `Failed to open file … : No such file or directory`. Making the directory first — as `mkdir` does here — is what lets the write succeed. Conveniently, `mkdir` also creates any missing intermediate directories, so a nested path such as `mkdir 'reports/2026'` builds the whole chain in a single call.

{% include nav.html %}
