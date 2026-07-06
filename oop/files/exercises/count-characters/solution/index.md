---
title: The solution of ’Count the characters‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'data.txt', 'Raku';

say slurp('data.txt').chars;
```

🦋 You can find the source code in the file [count-characters.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/count-characters.raku).

## Output

```
4
```

## Comments

1. `spurt` writes the string `Raku` to the file.

1. `slurp` reads it back as a string, and `.chars` counts its characters — four.

1. If you inspect the file, you will indeed only see the four characters; the newline character is not added.

{% include nav.html %}
