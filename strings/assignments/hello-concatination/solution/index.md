---
title: Solution of ’Hello, Concatenation!‘
---

[Start](../../../..) / [Part 1](../../../../part1) / [Strings](../../..) / [Assignments](../..) / [Hello, Concatenation!](..)

# The solution of ‘Hello, Concatenation!’

## Code

Here is a possible solution of this problem:

    my $name = prompt 'What is your name? ';
    say 'Hello, ' ~ $name ~ '!';

🦋 You can find the source code in the file [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/strings/assignments/hello-concatenation/solution/hello-concatenation.raku).

## Output

Run the program and it will enter a mode when it waits for your input. After you type the name and press Enter, the program continues and prints the greeting:

    $ raku hello-concatenation.raku
    What is your name? John
    Hello, John!

## Comments

Compare the program with [the previous variant](../../../../scalar-variables/assignments/greet-a-person/solution) where we passed three strings to the the `say` routine:

    say 'Hello, ', $name, '!';

This time, the three parts are first concatenated and then passed to `say` as a single string.

## Next assignment

| [Hello, Interpolation!](../../hello-interpolation) →

## Course navigation

← [Strings](../../..) / [String length](../../../string-length) | [Numbers](../../../../numbers) →



