---
title: Solution of ‘Examining the result of prompt — Numbers’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Data types and introspection](/raku-course/what) / [Exercises](../..) / [Examining the result of `prompt` — Numbers](..)

# Solution — testing numbers

## Code

Here is the complete program that sovles the job and prints both the entered string and its type.

    my $n = prompt 'Enter a number: ';
    say $n;
    say $n.WHAT;

🦋 You can find the source code in the file [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/what/prompt-numbers.raku).

## Test runs

Run the program several times and enter the nubmers of different types.

### Integers

Let us try integers first, both positive and negative.

    $ raku prompt-numbers.raku
    Enter a number: 10
    10
    (IntStr)

The type of the result is `IntStr`, the one that we did not see yet. This is an interesting built-in type that has the features of both `Int` and `Str`.

### Rational numbers

Now let us try a rational number. Remember that in Raku notation with a decimal dot creates a `Rat` number rather than a floating-point number.

    $ raku prompt-numbers.raku
    Enter a number: 3.14
    3.14
    (RatStr)

This time, the program says the type of the data in `$n` is `RatStr`, which stands for a combined type of both `Rat` and `Str`.

### Floating-point numbers

Finally, try a number in the scientific notation. You should be able to guess the output at this point.

    $ raku prompt-numbers.raku
    Enter a number: 5e-14
    5e-14
    (NumStr)

Indeed, the new value is of the `NumStr` type. We will come back to these interesting types in the excercises to one of the following sections.

## Course navigation

← [Data types and introspection](/raku-course/what) | [Data type conversion](/raku-course/coercion) →
