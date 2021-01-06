---
title: Reading command line arguments
---

{% include menu.html %}

The `MAIN` function is handy not only to explicitly locate the start of the program, but also because of its arguments, which get the values passed in command line.

There are two ways of reading command-line arguments. One of them is through the [`@*ARGS` array](/essentials/positionals/args-array). We will examine the second method now.

Let us create a program that adds up two numbers.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

You can run the program in the following way:

```console
$ raku t.raku 123 45
168
```

As with any other function, the `MAIN` function can have default values for some (or even all) of its arguments. For example:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

If the second argument is not provided, the default value is used:

```console
$ raku t.raku 15
115
```

{% include nav.html %}
