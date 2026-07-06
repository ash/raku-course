---
title: The solution of ’Build up a log‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 You can find the source code in the file [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Output

```
start
entry 1
entry 2
entry 3
```

## Comments

1. The first `spurt` creates the file fresh with the line `start`.

1. Each `spurt` inside the loop uses `:append`, so it adds its line after the existing content rather than replacing the file. This is exactly how a log file grows: every iteration (or every run of a program) tacks one more line onto the end.

1. Without `:append`, each pass would overwrite the file, and only the last line would survive.

{% include nav.html %}
