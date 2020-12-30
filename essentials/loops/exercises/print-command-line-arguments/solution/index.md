---
title: Solution of ‘Print command line arguments’
---

{% include menu.html %}

The program gets the arguments from command line in the array `@*ARGS`. So, we have to loop over its elements.

## Code

```raku
.say for @*ARGS;
```

🦋 Find the program in the file [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/print-command-line-arguments.raku).

## Output

Run the program and confirm it prints the arguments line by line:

```console
$ raku exercises/loops/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}
