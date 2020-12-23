---
title: Type conversion for typed variables
---

{% include menu.html %}

Notice that type constraints are strict enough. For instance, you cannot assign a `Num` value, even if it contains a whole integer, to a variable declared as `Int`:

    my Int $x = 42;
    # $x = 42e1; # Error

Use one of the methods to cast the value.

    my Int $x = 42;
    $x = 42e1.Int;
    $x = Int(42e1);

## Course navigation

← [Data type conversion](/raku-course/coercion) | [Typed variables](/raku-course/typed-variables) / 💪 [Exercises](/raku-course/typed-variables/exercises) →
