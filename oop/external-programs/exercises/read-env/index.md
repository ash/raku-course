---
title: Exercise ’Pass a variable to a child‘
---

{% include menu.html %}

## Problem

Create a file `notes.txt` and write a few lines into it. Put its name into an environment variable `NOTES`. Then use `shell` to run `wc -l`, reading the file name from `$NOTES`, so the child counts the lines and prints the number. Finally, delete the file from Raku — with `unlink`, not through the shell.

## Example

The program prints:

```
3
```

(and leaves no `notes.txt` behind.)

## Solution

✅ [See the solution](solution)

{% include nav.html %}
