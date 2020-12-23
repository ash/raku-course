---
title: Assigning a value
---

{% include menu.html %}

Use the `=` operator to put a new value into a scalar container.

    my $name;
    $name = 'Anna';

You can now use the variable and, for example, print it:

    say $name;

## Multiple assignment

Multiple variables can be assigned at onces. For example, this is how to assign two scalars in a single statement:

    my ($a, $b);
    ($a, $b) = 10, 20;

Notice that you cannot omit the parentheses on the left-hand side. But you can add them for symmetry on the right side:

    ($a, $b) = (10, 20);

## Course navigation

← [Scalar variables](/raku-course/scalar-variables/) / [Declaring a variable](/raku-course/scalar-variables/declaring-a-variable) | 🤔 [Quiz](quiz) →
