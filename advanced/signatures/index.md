---
title: Signatures
---

{% include menu.html %}

In the Essentials part you [defined subroutines with positional and named parameters and gave them default values](/essentials/functions). The list of parameters is called the _signature_. This section adds two more things a signature can do: mark a parameter as optional, and collect any number of extra arguments.

## Optional parameters

A parameter followed by a question mark is _optional_: the caller may leave it out. When it is left out, the parameter is undefined, so you can supply a fallback with the defined-or operator `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

When `greet` is called with one argument, `$greeting` is undefined, so `//` falls back to `'Hello'`.

## Slurpy parameters

A parameter marked with a `*` is _slurpy_: it gathers all the remaining arguments. A slurpy array, written `*@`, collects any number of positional arguments into an array:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

You can combine ordinary parameters with a slurpy one. The fixed parameters are filled first, and whatever is left goes into the slurpy array:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

In the same way, a slurpy hash, written `*%`, collects any extra named arguments into a hash:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

The two named arguments end up as keys of `%options`, so the program prints:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
