---
title: Variable interpolation in Raku strings
---

{% include menu.html %}

Have you already noticed in the previous sections that sometimes the strings were quoted in single, but sometimes in double quotes? The difference is crusial.

Of course, you can use double quotes if you want to put a single quote insde the string with minimum effort:

    say "O'Henry";

By the way, it is still better to use a proper apostrophe instead of a single quote as [Raku is good at Unicode](../../on-unicode).

    say 'O’Henry';

But the real power of double quotes is in their ability to _interpolate_ variables and—as we’ll see a bit further—to execute code! Examine the following program:

    my $name = 'Karl';
    say "Hello, $name!";

As you might expect, the program prints `Hello, Karl!`. The name of the `$name` variable (together with its sigil `$`) was replaced by the value of the variable.

The variabl was interpolated with that value that the variable kept at the moment of interpolation, so if you change the content of `$name` and interpolate it again, it will be interpollated with the updated value. Let’s test it:

    my $name = 'Karl';
    say "Hello, $name!";

    $name = 'Anna';
    say "Hello, $name!";

The same string generates differnet messages this time:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}
