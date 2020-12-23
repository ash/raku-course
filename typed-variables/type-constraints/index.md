---
title: Type constraints
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Typed variables](/raku-course/typed-variables)

# Type constraints

In some cases, though, you may want to restrict the type for the given variable, and you can do it by specifying the type as shown below:

    my Int $var = 42;

Now, it is possible to assign another integer value to `$var`, but and attempt to put a string or even a floating-point number into the variable ends with an exception:

    my Int $var = 42;
    $var = '314E-2';

This program emits the following error:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

## Course navigation

← [Data type conversion](/raku-course/coercion) | [Typed variables](/raku-course/typed-variables) / [Using `of`](../using-of) →
