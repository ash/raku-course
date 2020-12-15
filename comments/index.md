---
title: Comments in Raku
---

[Start](/raku-course/) / [Part 1](/raku-course/part1)

# Comments

Comments are those parts of the program that are intended for a human that reads the program. Comments are mostly ignored by the compiler (in some rare cases you can have some comments which will be part of an error message, for example, but we are not going to cover it right now).

## Single-line comments

The simplest form of a comment is a one-line comment, which starts by the `#` character and goes until the end of the current line.

    my $name; # This variable is used to keep user’s name
    $name = prompt 'What is your name? ';
    say $name; # We see the name now

Notice that a sheebang such as `#!/usr/bin/env raku` in the first line of code is also a comment for Raku, while it can be read and executed by the shell.

## Multi-line comments

As soon as you want to leave a comment that is more than a single line, you can choose either to have a few single-line comments or a single multi-line comment.

Multi-line comments start with a two-character combination ``#` `` and are followed by a pair of enclosing characters `( )`, `{ }`, `[ ]`, or `< >` or their paird multiple copies: `(( ))`, `[[[ ]]]`, etc.

For example:

    my $name;
    #`( We are going to ask the user
    to enter their name first and then
    save the input in a variable. )

    $name = prompt 'What is your name? ';
    #`{ The program now waits
    until the user enters the name
    and presses Enter. }

    say $name; #`( And now we can print it )

## Embedded comments

Embedded, or inline comments, have the same form as multi-line comments with the only difference that you place it between other parts of the program. For example:

    my $name;
    $name = #`[User input expected here] prompt 'What is your name? ';
    say $name;

A good syntax highlighter helps a lot to visualize the presense of embedded comments.

## Course navigation

← [Simple input and output](/raku-course/simple-input-output) / [Input with with `prompt`](/raku-course/simple-input-output/prompt) | [Scalar variables](/raku-course/scalar-variables)  →
