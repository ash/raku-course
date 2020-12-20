---
title: Data type conversion
---

[Start](/raku-course/) / [Part 1](/raku-course/part1)

# Data type conversion

Sometimes you need to convert the values of one type to another type. There are a few ways you can do that.

## Using type coercion methods

To convert, or to _coerce_ a type, call a method with the name of the data type. For example, convert a string into an integer number:

    my $howmany = '42';
    my $n = $howmany.Int;
    say $n;

In many cases, you don’t need to convert values explicitly, as Raku does that job for you. The following code is a working correctly and predictably:

    my $a = '10';
    my $b = '20';
    my $c = $a + $b;
    say "The result is $c."; # The result is 30.

The two variables, `$a` and `$b`, contain strings, but they are used in an arithmetical expression with `+`. At this point, both strings are converted to integers, and thus `$c` also gets an integer. In the last line, a variable containing an integer is interpolated in a string, so Raku does the necessary operations to present the number as a sequence of digit characters.

## Using constructor forms

A similar method is to construct a new instance of an object of the required type by calling its constructor, whose name is the name of the type. For example:

    my $n = Int('1.23E4');
    say $n;      # 12300
    say $n.WHAT; # (Int)

Here, the string containing a floating-point number is converted to an integer.

## Using prefix operators

Another way of transforming the type of an object is to use prefix operators. Those are one-character operators that are placed immediately before the value (or a variable).

`~` | String coercion
`+` | Numeric coercion
`?` | Boolean coercion

Consider an example of creating a Boolean value out of an integer:

    say ?42; # True

Converting to a string is similar:

    my $n = -30;
    my $s = ~$n;
    say $s.chars; # 3, as "-30" has 3 characters

Notice that with the case of numeric conversion, the type of the converted value differes depending on the number in question. Compare the following conversions from strings:

    say (+'100').WHAT;   # (Int)
    say (+'3.14').WHAT;  # (Rat)
    say (+'27E-1').WHAT; # (Num)

## Course navigation

← [Data types and introspection](/raku-course/what) | 💪 [Exercises](exercises) →
