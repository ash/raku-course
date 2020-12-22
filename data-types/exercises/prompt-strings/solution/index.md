---
title: Solution of ‘Examining the output of prompt — Strings’
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Data types](/raku-course/data-types) / [Exercises](../..) / [Examining the result of `prompt` — Strings](..)

# Solution — testing strings

## Code

Here is the complete program that sovles the job and prints both the entered string and its type.

    my $name = prompt 'What is your name? ';
    say $name;
    say $name.WHAT;

🦋 You can find the source code in the file [prompt-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/data-types/prompt-strings.raku).

## Test runs

Run the program a couple of times and enter different names. The program echoes the input and also reports that the variable contains a string, in other words, an object of the `Str` type.

    $ raku prompt-strings.raku
    What is your name? Andrey
    Andrey
    (Str)

Now, run the program again and instead of a name type a few spaces, then press Enter.

    $ raku prompt-strings.raku
    What is your name?    
    
    (Str)

We do not see the output (well, it is seen as white on white), but we see that the type of the variable is still `Str`.


## Next exercise

| [Examining the result of `prompt` — Numbers](../../prompt-numbers) →

## Course navigation

← [Data types](/raku-course/data-types) / [Introspection with `WHAT`](/raku-course/data-types/what) | [Data type conversion](/raku-course/coercion) →
