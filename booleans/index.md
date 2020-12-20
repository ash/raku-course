---
title: Boolean type in Raku
---

[Start](/raku-course/) / [Part 1](/raku-course/part1)

# Boolean type

Raku offers a built-in type for Boolean values. It is called `Bool` and it is actually deined as an enumeration with two values: `True` and `False`.

## Operations

All standard operations are defined for Boolean values: Booleand AND, OR, and exclusive OR or XOR:

    say False && True; # AND
    say False || True; # OR
    say False ^^ True; # XOR

This program prints the following results:

    False
    True
    True

To negate a Boolan value, use the prefix operator `!`:

    say !False; # True

Boolean values can be stored in scalar variables:

    my $did = True;
    my $didn't = !$did;


## Boolean operations with other types

In the next section, we will talk about converting data of different types to each other. But before that it is important to highlight the following feature of Raku. When boolean operations are applied to strings and integers, the values are not converted to Booleans, and the result is neither directly a Boolean value. Consider the following examples:

    say 'Hello' && 'World'; # World
    say 'Alpha' || 'Beta';  # Alpha
    say 0 ^^ 42;            # 42

Let us read the rules 📖 [from the documentation](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` returns the first argument that evaluates to False in Boolean context, otherwise returns the last argument.
* `||` returns the first argument that evaluates to True in Boolean context, otherwise returns the last argument.
* `^^` returns the true argument if there is one (and only one). Returns the last argument if all arguments are false. Returns `Nil` when more than one argument is true.

Notice that we just met a ‘null’ value `Nil`.

## Course navigation

← [Numbers](/raku-course/numbers) / [Floating-point numbers](/raku-course/numbers/numeric) | 💪 [Exercises](exercises) →
