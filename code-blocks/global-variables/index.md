---
title: Global variables
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Code blocks](code-blocks)

# Global variables

Let us create a variable before the code block:

    my $x = 1;

    {
        $x = 42;
        say $x;
    }

    say $x;

In this case, the `$x` variable is global (it is located in the global scope), and the program prints `42` two times.

## Course navigation

← [Code blocks](/raku-course/code-blocks) / [Lexical scope](/raku-course/code-blocks/lexical-scope) | [Code blocks](/raku-course/code-blocks) / [Local variables](/raku-course/code-blocks/local-variables) →
