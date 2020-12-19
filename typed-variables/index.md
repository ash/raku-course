---
title: Typed variables
---

[Start](/raku-course/) / [Part 1](/raku-course/part1)

# Typed variables

In Raku, a scalar variable (or, a scalar container) can keep a single object of different types. For example, the same variable can first contain a number, and ten a string:

    my $var = 42;
    $var = 'Hello';

This is, probably, not the best coding practice, but it is a perfectly valid Raku program.

## Type constraints

In some cases, though, you may want to restrict the type for the given variable, and you can do it by specifying the type as shown below:

    my Int $var = 42;

Now, it is possible to assign another integer value to `$var`, but and attempt to put a string or even a floating-point number into the variable ends with an exception:

    my Int $var = 42;
    $var = '314E-2';

This program emits the following error:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

## Using `of`

Here is another possible syntax to restrict the type of the scalar container:

    my $var of Int;
    my $str of Str = 'Hello';

## Type conversion for typed variables

Notice that type constraints are strict enough. For instance, you cannot assign a `Num` value, even if it contains a whole integer, to a variable declared as `Int`:

    my Int $x = 42;
    # $x = 42e1; # Error

Use one of the methods to [cast](/raku-course/coercion) the value.

    my Int $x = 42;
    $x = 42e1.Int;
    $x = Int(42e1);

## Course navigation

← [Data type conversion](/raku-course/coercion) | 💪 [Exercises](exercises) →
