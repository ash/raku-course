---
title: Creating and calling functions in Raku
---

{% include menu.html %}

You’ve reached the last section of the first part. By completing it, you will have all the knowledge needed to create virtually _any_ program in Raku. The subject of this section is _functions_, or _subroutines_, or even simply _routines_.

A function is a reusable part of code that has its own name and can be called from different places in the program.

## Creating a function

To create a function, use the keyword `sub` followed by a name of the function. The body of the function is enclosed in a pair of curly brackets. 

    sub greet {
        say 'Hello, World!';
    }

## Using a function

To use the function, just put it name at the place where you need to call it. In Raku, a function definition can be before or after the place where the function is used.

    say 'This is what the first program usually prints:';
    greet;    

    sub greet {
        say 'Hello, World!';
    }

The program prints both messages:

    $ raku t.raku
    This is what the first program usually prints:
    Hello, World!

Now, let us look at other details of creating and using functions.

{% include nav.html %}
