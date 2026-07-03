---
title: Creating and calling functions in Raku
---

{% include menu.html %}

You’ve reached the last section of the first part of the course. By completing it, you will have all the knowledge needed to create virtually _any_ program in Raku. The subject of this section is _functions_, or _subroutines_, or even simply _routines_.

A function is a reusable part of code with its own name. You can _call_ functions from different places in the program.

## Creating a function

To create a function, use the keyword `sub` followed by the name of the function. The body of the function is enclosed in a pair of curly brackets. 

```raku
sub greet {
    say 'Hello, World!';
}
```

## Using a function

To use the function, just put its name at the place where you need to call it. In Raku, a function’s definition can be located before or after the place where the function is used.

```raku
say 'This is what the first program usually prints:';
greet;    

sub greet {
    say 'Hello, World!';
}
```

The program prints both messages:

```console
$ raku t.raku
This is what the first program usually prints:
Hello, World!
```

Now, let us look at other details of creating and using functions.

{% include nav.html %}
