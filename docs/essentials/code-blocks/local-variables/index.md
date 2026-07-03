---
title: Local variables
---

{% include menu.html %}

What if you declare a variable not only in the global scope but also locally in the block? 

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

The program has two independent variables now. They share the name, but all references to `$x` in the global scope are about the global variable, while the `$x` inside the block is a local variable, different from the global `$x`. The program prints two different values:

```console
$ raku t.raku
42
1
```

{% include nav.html %}
