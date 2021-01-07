---
title: Lexical scope
---

{% include menu.html %}

A code block creates a so-called lexical scope. Variables declared in the current block are visible inside it, but not after the program exits the block. Consider an example:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

The `$x` variable is created in the code block. The first call of `say $x` prints the value of the variable as it is visible within the block. The second `say $x` fails because the name `$x` does not exist outside of the block and is not known after it ended. The program does not compile and you get an error:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}
