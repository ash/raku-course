---
title: Data types and introspection
---

[Start](/raku-course/) / [Part 1](/raku-course/part1)

# Data types and introspection

So far we have seen a number of data types that Raku supports. These are different kind of [numbers](/raku-course/numbers) (integers, rational numbers, and floating-point numbers), [strings](/raku-course/strings), and [Boolean](/raku-course/booleans) types. Each data type has its name in the Raku type system.

`Str` | String of characters
`Int` | Integer number
`Rat` | Rational number
`Num` | Floating-point number
`Bool` | Logical Boolean

There are not all data types that Raku understands. We will see more in the further sections of this course.

## Introspection with `WHAT`

It is possible to see the type of data that the variable hold by calling the `WHAT` method on it:

    my $n = 42;
    my $s = '42';
    say $n.WHAT; # (Int)
    say $s.WHAT; # (Str)

The type is printed in parentheses as shown in the comments. For example, `(Int)` or `(Str)`.

There is no problem to call a method on a literal itself. For example:

    say 42.WHAT;      # (Int)
    say (-1).WHAT;    # (Int)
    say 'Hello'.WHAT; # (Str)
    say True.WHAT;    # (Bool)

Notice that in the case of `-1` we put the number in parentheses, as `say -1.WHAT` would try to negate the result of `1.WHAT`, which leads to an exception.

## Course navigation

← [Boolean type](/raku-course/booleans) | [Data type conversion](/raku-course/coercion) →
