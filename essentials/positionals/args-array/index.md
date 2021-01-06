---
title: The @*ARGS array
---

{% include menu.html %}

So far as arrays are introduced, it is a good time to meet one of the built-in arrays, `@*ARGS`. The `*` in its name is the second sigil, or _twigil_, and we’ll see more of them in the future. But for now, let’s get the profit of knowing about this special array. It contains the argument that the program gets from command line.

Consider the following program run:

```console
$ raku run.raku alpha beta
```

The program `run.raku` gets three paraters: `alpha` and `beta`. They can be read from the program from `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

This program prints the number of arguments passed to it and the arguments themselves:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Notice that the program requires no change if you call it as an executable file:

```console
$ ./run.raku alpha beta
```

The program in this case [should have a shebang](/essentials/running-programs/from-command-line), but the most important thing is that the indices of `@*ARGS` still start with `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}
