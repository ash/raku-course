---
title: Global variables
---

{% include menu.html %}

Let us create a variable before the code block:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

In this case, `$x` is a global variable (it is located in the global scope), and the program prints `42` twice.

{% include nav.html %}
