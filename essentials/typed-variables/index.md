---
title: Typed variables
---

{% include menu.html %}

In Raku, a scalar variable (or, a scalar container) can keep a single object of different types. For example, the same variable can first contain a number, and ten a string:

    my $var = 42;
    $var = 'Hello';

This is, probably, not the best coding practice, but it is a perfectly valid Raku program.

## Next steps

* [Type constraints](type-constraints)
* [Using `of`](using-of)
* [Type conversion for typed variables](coercion)

## Course navigation

← [Data type conversion](/raku-course/coercion) | [Type constraints](type-constraints) →
