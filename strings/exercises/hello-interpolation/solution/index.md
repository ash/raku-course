---
title: Solution of ’Hello, Interpolation!‘
---

[Start](../../../..) / [Part 1](../../../../part1) / [Strings](../../..) / [Exercises](../..) / [Hello, Interpolation!](..)

# The solution of ‘Hello, Interpolation!’

## Code

Here is a possible solution of this problem:

    my $name = prompt 'What is your name? ';
    say "Hello, $name!";

🦋 You can find the source code in the file [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Output

Run the program and it will enter a mode when it waits for your input. After you type the name and press Enter, the program continues and prints the greeting:

    $ raku hello-concatenation.raku
    What is your name? Raku
    Hello, Raku!

## Comments

Notice that this time, the string is double-quoted. In double quotes, variables will be interpolated, so their content will be placed in the string.

## Next exercise

| [Purchase table](../../purchase-table) →

## Course navigation

← [Strings](../../..) / [String length](../../../string-length) | [Numbers](../../../../numbers) →



