---
title: Quiz 1 — Assigning a value
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Scalar variables](/raku-course/scalar-variables) / [Assigning a value](/raku-course/scalar-variables/assigning-a-value)

# Quiz 1 — Assigning a value

Complete the following lines of code to get a working program that create a few variables and assigns some values to them;

{:.quiz-code}
. | my $first-name;
$ | my&nbsp; ␣last-name;
= | $first-name&nbsp; ␣ &nbsp;&apos;Emily&apos;;
= ; | $last-name&nbsp; ␣ &nbsp;&apos;Lizards&apos; ␣
; | say $first-name ␣
. | say $last-name;

{% include quiz.html %}


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

← [Scalar variables](/raku-course/scalar-variables/) / [Declaring a variable](/raku-course/scalar-variables/declaring-a-variable) | [Scalar variables](/raku-course/scalar-variables/) / [Declaration with initialization](/raku-course/scalar-variables/declaration-with-initialization)  →
