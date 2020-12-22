---
title: Solution of ‘True and False strings’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Data type conversions](/raku-course/coercion) / [Exercises](/raku-course/coercion/exercises) / [True and False strings](..)

# The solution of ‘True and False strings’

This exercise is similar to [the previous one](/raku-course/coercion/exercises/true-false-numbers), but this time, the task is a bit trickier. There are more ’suspect’ strings that can be treated as `False`. Let us explore them.

    say ?'';

    say ?' ';
    say ?'        ';

    say ?"\n";

    say ?'0';
    say ?'0.0';

From all of these, only the empty string is casted as `False`. All other strings, even those that contain only spaces or an explicit character `0`, become `True`.

🦋 You can find the full program with the above example in the file [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/true-false-strings.raku).

## Course navigation

← [Data types and introspection](/raku-course/what) | [Typed variables](/raku-course/typed-variables) →
