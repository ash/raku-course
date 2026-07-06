---
title: The solution of ’Count the lines‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'data.txt', "a\nb\nc\nd\n";

say 'data.txt'.IO.lines.elems;
```

🦋 You can find the source code in the file [count-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/count-lines.raku).

## Output

```
4
```

## Comments

1. `.IO.lines` returns the lines of the file as a list.

1. `.elems` counts them, giving `4`.

{% include nav.html %}
