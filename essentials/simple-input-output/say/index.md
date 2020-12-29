---
title: Output wth say
---

{% include menu.html %}

The `say` function (or a subroutine, or simply routine) prints the values to the standard output stream, `STDOUT`. If you run the program from a terminal, the output appears there. If you run in online services such as [glot.io](https://glot.io/new/perl6), the output appears in a dedicated area in the browser.

Here is an example of using say:

```raku
say 42;
```

This line can be either a part of a bigger program or be the whole program itself. It obviously prints `42` to the output.

Let us work with strings now:

```raku
say 'Hello, World!';
```

Voilà, we got `Hello, World!` on the screen.

The `say` routine can accept more than one argumnet, so we can print both values in one go:

```raku
say 42, 'Hello, World!';
```

Just note that the parts of this output will be concatenated to a single string: `42Hello, World!`, so it’s better to add a space. And you should be able to solve this problem by now, for example, like this:

```raku
say 42, ' ', 'Hello, World!';
```

After printing all the argumnets, the `say` routine adds a newline character to the output.

{% include nav.html %}
