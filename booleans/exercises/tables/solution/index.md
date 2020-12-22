---
title: Solution to 'Boolean tables’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Boolean type](/raku-course/booleans) / [Exercises](..)

# Solution of ‘Boolean tables’

Here is a possible program that prints all the results of Boolean operations.

## Code

    say 'True && True is ', True && True; 
    say 'True && False is ', True && False;
    say 'False && True is ', False && True;
    say 'False && False is ', False && False;

    say 'True || True is ', True || True; 
    say 'True || False is ', True || False;
    say 'False || True is ', False || True;
    say 'False || False is ', False || False;

    say 'True ^^ True is ', True ^^ True; 
    say 'True ^^ False is ', True ^^ False;
    say 'False ^^ True is ', False ^^ True;
    say 'False ^^ False is ', False ^^ False;

🦋 You can find the full code in the file [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Output

Run the program, and it prints the following table.

    $ raku tables.raku
    True && True is True
    True && False is False
    False && True is False
    False && False is False
    True || True is True
    True || False is True
    False || True is True
    False || False is False
    True ^^ True is Nil
    True ^^ False is True
    False ^^ True is True
    False ^^ False is False

## Comments

Notice that due to higher precedence of the Boolean operations, you do not need to put them in parentheses. This, though, is not the case if you choose to use string concatenation:

    say 'True && True is ' ~ (True && True);

You can return to this exercise after we review interpolating code blocks in strings.

## Next exercise

| [Double and tripple negation](/raku-course/booleans/exercises/nth-negation) →

## Course navigation

← [Boolean type](/raku-course/booleans) / [Boolean operations with other types](/raku-course/booleans/boolean-operations-other-types) | [Data types and introspection](/raku-course/what) →
