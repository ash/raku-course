---
title: Variable interpolation in Raku strings
---

{% include menu.html %}

Have you already noticed in the previous sections that sometimes the strings were quoted in single, but sometimes in double quotes? The difference is crucial.

Of course, you can use double quotes if you want to put a single quote inside the string with minimum effort:

```raku
say "O'Henry";
```

By the way, it is still better to use a proper apostrophe instead of a single quote as [Raku is good at Unicode](../../on-unicode).

```raku
say 'O’Henry';
```

But the real power of double quotes is their ability to _interpolate_ variables and—as we’ll see soon—to execute code! Examine the following program:

```raku
my $name = 'Karl';
say "Hello, $name!";
```

As you might expect, the program prints `Hello, Karl!`. The name of the `$name` variable (together with its sigil `$`) was replaced by the value of the variable.

The variable was interpolated with the value that the variable kept at the moment of interpolation, so if you change the content of `$name` and interpolate it again, the new value will be substituted. Let’s test it:

```raku
my $name = 'Karl';
say "Hello, $name!";

$name = 'Anna';
say "Hello, $name!";
```

The same string generates different messages this time:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}
