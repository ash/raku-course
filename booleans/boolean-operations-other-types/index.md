---
title: Boolean operations with other types
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Boolean type](/raku-course/booleans)

# Boolean operations with other types

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

← [Boolean type](/raku-course/booleans) / [Boolean operations](/raku-course/booleans/operations) | 💪 [Exercises](/raku-course/booleans/exercises) →
