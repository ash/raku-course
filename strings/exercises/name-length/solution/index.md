---
title: Solution of ’Name length‘
---

[Start](/raku-course) / [Part 1](/raku-course/part1) / [Strings](/raku-course/strings) / [Exercises](../..) / [Name length](..)

# The solution of ‘Name length’

## Code

Here is the solution to the task:

    my $name = prompt 'What is your name? ';
    say $name.chars;

🦋 You can find the source code in the file [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Output

Run the program and enter the name.

    $ raku name-length.raku 
    What is your name? Alexandra
    9

## Comments

In this program, we are getting the length of the string by calling the `chars` method on the `$name` variable. As the variable contains a string, the method returns the length of it.

## Course navigation

← [Strings](/raku-course/strings) / [String length](/raku-course/strings/string-length) | [Numbers](/raku-course/numbers) →
