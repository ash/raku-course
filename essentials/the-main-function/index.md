---
title: The MAIN function
---

{% include menu.html %}

A program in Raku does not need any boilerplate ritual, so you can immediately start writing useful instructions. This part of the program, which is located on the level above any [block of codes](/raku-course/essentials/code-blocks) (including [functions](/raku-course/essentials/functions), for example), is called _mainline_.

If the program contains a function with the special name `MAIN`, Raku executes this function after it compiles everything and after the mainline code has been executed.

```raku
say 'Mainline code';

sub MAIN {
    say 'MAIN called';
}

say 'Also mainline';
```

This program first executes the top-level `say`s, and then calls `MAIN`:

```console
$ raku t.raku
Mainline code
Also mainline
MAIN called
```

Of course, it is also possible to have a program that only have the `MAIN` function and no other mainline code.

{% include nav.html %}
