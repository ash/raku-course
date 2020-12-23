---
title: Solution of ‘Number of tens’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Numbers](/raku-course/numbers) / [Exercises](/raku-course/numbers/exercises) / [Number of tens](..)

# The solution of ‘Number of tens’

This is how you can solve the task.

## Code

    my $n = prompt 'Enter a positive integer number: ';

    say ($n % 100) div 10;

🦋 You can find the full code in the file [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/tens.raku).

## Output

Run the program and test a few different cases:

* A three-digit round number such as 120;
* A number multiple of 100, for example, 400;
* A number, which is bigger than 10 but smaller than 100.
* A number less than 10.

For the input number 234, the program’s output looks like this:

    $ raku exercises/numbers/tens.raku
    Enter a positive integer number: 234
    3

## Comments

In this solution, the combination of the modulo `%` and integer division `div` is used again.

Notice the space before the opening parenthesis. It has to be there, otherwise you get a syntax error. We’ll return to this aspect of Raku in the section about [functions](/raku-course/functions), but for now, type the code as shown above or add another pair of parentheses to surround the argument of the function — in this case, no space is needed:

    say(($n % 100) div 10);

## Next exercise

| [The value of π](/raku-course/numbers/exercises/pi) →

## Course navigation

← [Numbers](/raku-course/numbers) / [Operations with numbers](/raku-course/numbers/operations) | [Code blocks](/raku-course/code-blocks) →
