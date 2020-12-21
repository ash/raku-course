---
title: Solution ‘Converting user input to a number’
---

[Start](/raku-course) / [Part 1](/raku-course/part1) / [Typed variables](/raku-course/typed-variables) / [Exercises](../..) / [Converting user input to a number](..)

# The Solution of ‘Converting user input to a number’

The program can be as simple as this:

## Code

    my Int $n = prompt 'Enter a number: ';
    say $n;

🦋 You can find the source code in the file [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Example

Run it and enter an integer number, either positive or negative:

    $ raku input-number.raku
    Enter a number: -42
    -42

## Comments

As we’ve seen in the [previous exercise](/raku-course/typed-variables/exercises/intstr), the return value of `prompt` is `IntStr`, which can be assigned to an `Int` variable with no problems. 

Notice, though, that the program will be terminated with an exception if you enter a string that cannot be converted to an integer number.

## Course navigation

← [Data types and introspection](/raku-course/what) | [Typed variables](/raku-course/typed-variables) →
