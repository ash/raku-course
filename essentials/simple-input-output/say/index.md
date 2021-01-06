---
title: Output wth say
---

{% include menu.html %}

The `say` function (or a subroutine, or simply routine) prints the values to the standard output stream, `STDOUT`. If you are running the program from a terminal, the output appears there. If you are using online services, the output is sent to a dedicated area of the web page.

Here is an example of using `say`:

```raku
say 42;
```

This line can be either a part of a bigger program or be the whole program itself. It obviously prints `42` to the output.

Let us work with strings now:

```raku
say 'Hello, World!';
```

Voilà, we got `Hello, World!` on the screen.

The `say` routine can accept more than one argument, so we can print more values in one go:

```raku
say 42, 'Hello, World!';
```

Just note that the parts of this output are concatenated to a single string: `42Hello, World!`, so it’s better to add a space between them. And you should be able to solve this problem by now, for example, like this:

```raku
say 42, ' ', 'Hello, World!';
```

After printing all the arguments, the `say` routine adds a newline character to the output.

{% include nav.html %}
