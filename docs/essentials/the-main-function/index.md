---
title: The MAIN function
---

{% include menu.html %}

A Raku program does not need any boilerplate ritual, so you can immediately start writing useful instructions. This part of the program, which is located on the level above any [code block](/essentials/code-blocks) (including [functions](/essentials/functions), for example), is called _mainline_.

If the program contains a function with the special name `MAIN`, Raku executes this function after it compiles everything and after the mainline code has been executed.

```raku
say '1. Mainline code';

sub MAIN {
    say '3. MAIN called';
}

say '2. Also mainline';
```

This program first executes the top-level `say`s, and then calls `MAIN`:

```console
$ raku t.raku
1. Mainline code
2. Also mainline
3. MAIN called
```

Of course, it is also possible to have a program with the `MAIN` function and no other mainline code.

{% include nav.html %}
