---
title: Solution of ‘The number of command line arguments’
---

{% include menu.html %}

The solution is quite simple.

## Code

```raku
say @*ARGS.elems;
```

Alternatively, you can chain all the methods:

```raku
@*ARGS.elems.say;
```

🦋 Find the program in the file [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/number-of-command-line-arguments.raku).

## Output

This program requires a test of two cases:

1. No arguments passed.
1. Some non-zero number of arguments passed.

```console
$ raku exercises/positionals/number-of-command-line-arguments.raku
0

$ raku exercises/positionals/number-of-command-line-arguments.raku one 2 three 4 five 6 seven
7
```

{% include nav.html %}
