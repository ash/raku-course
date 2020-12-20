---
title: Solution to 'Double negation’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Boolean type](/raku-course/booleans) / [Exercises](../..) / [Double negation](..)

# Solution of ‘Double negation’

Let us extend the program to solve the second part of the exercise and reuse the same variable:

## Code

    my $value = False;
    say !!$value;

    $value = True;
    say !!$value;

🦋 You can find the full code in the file [double-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/double-negation.raku).

## Comments

Before running the program, let us think what it will print. There are two negation operators before the variable. And they act as two negation operators. In the first case, the falue is flipped from `False` to `True`, and then immediately flipped back from `True` to `False`. In the second case, the algorithm is the same: after two negations, we get the initial Boolean value.

## Output

The program prints the following output, which confirms the above considerations:

    $ raku double-negation.raku
    False
    True

## Next exercise

| [Triple negation](/raku-course/booleans/exercises/triple-negation) →

## Course navigation

← [Scalar variables](/raku-course/scalar-variables) / [Declaration with initialization](/raku-course/scalar-variables/declaration-with-initialization) | [Data types and introspection](/raku-course/what) →
