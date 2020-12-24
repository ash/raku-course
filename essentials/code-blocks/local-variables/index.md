---
title: Local variables
---

{% include menu.html %}

What if you declare the variable not only in the global scope, but also locally in the block? 

    my $x = 1;

    {
        my $x = 42;
        say $x;
    }

    say $x;

Now the program has actually two independent variables. They share the name, but all references to `$x` in the global scope are about the global variable, while the `$x` inside the block is a local variable, that is different from the global `$x`. The program will now print two different values:

    $ raku t.raku
    42
    1

{% include nav.html %}
