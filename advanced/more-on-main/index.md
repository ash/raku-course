---
title: More on MAIN subroutines
---

{% include menu.html %}

In the Essentials part you used `MAIN` [to receive command-line arguments](/essentials/the-main-function/reading-command-line-arguments). Raku does more for you around `MAIN` than just passing the values in.

## The usage message

If the arguments on the command line do not match the signature of `MAIN`, Raku does not run the body. Instead, it prints an automatically generated _usage message_ that describes how the program should be called.

Take this program:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Called correctly, it greets the person:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Called with no argument, the signature does not match, so Raku prints the usage instead of the greeting:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

The message is built from the names of the parameters, so giving them meaningful names makes the help text helpful for free.

## Named arguments

Parameters of `MAIN` may be named as well as positional. A named parameter becomes a `--option=value` switch on the command line, and a default value makes it optional:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
