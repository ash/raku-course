---
title: 'Solution: Print the sum'
---

{% include menu.html %}

This program consists of a single `MAIN` function that takes two typed arguments, both of each are built from the arguments from the command line.

## Code

Here is the solution:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Find the program in the file [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Output

Try different input numbers:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

You can also try running the program without the arguments or with the arguments of different types and see what happens. We’ll talk about handling those cases in the second part of the course.

{% include nav.html %}
