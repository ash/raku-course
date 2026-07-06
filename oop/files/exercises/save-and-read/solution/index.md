---
title: The solution of ’Save and read‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
```

🦋 You can find the source code in the file [save-and-read.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/save-and-read.raku).

## Output

```
84
```

## Comments

1. `spurt` creates the file and writes the string to it; `slurp` reads the whole file back into a string. Together they are a complete save-and-load round trip.

1. What comes back from `slurp` is text — `"42\n"` — so we `trim` off the trailing newline and call `.Int` to turn it into a number before doing arithmetic. The result, `42 * 2`, is `84`.

1. The program still works without `.trim.Int` though.

{% include nav.html %}
