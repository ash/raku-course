---
title: Converting types with prefix operators
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Data type conversion](/raku-course/coercion)

# Converting types with prefix operators

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

For Boolean conversions, there is also another prefix operator called `so`, and you can call this routine as a method too:

    my $value = 42;
    say so $value; # True
    say $value.so; # True

## Course navigation

← [Data types and introspection](/raku-course/what) | [Data type conversion](/raku-course/coercion) / 💪 [Exercises](../exercises) →
