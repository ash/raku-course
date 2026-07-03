---
title: Type constraints
---

{% include menu.html %}

In the [Essentials part](/essentials/typed-variables/type-constraints/), you saw how to set the type of a variable using a type constraint. It is worth stressing that it is the _container_ that enforces this restriction on the values it is allowed to accept.

The following declaration creates a scalar container that can only host integers:

```raku
my Int $int;
```

A typed container accepts only the values that fit its type, so all of the following assignments are valid:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku does not perform automatic type casting in this case. Assigning a floating-point number (which is a `Rat` value in Raku) is therefore not allowed:

```raku
my Int $int;
$int = 123.45;
```

You already get an error at compile time:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

To avoid the error, convert the value explicitly:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Don’t be confused by the two dots in `123.45.Int`. The first is the decimal point; the second calls the `Int` method on the rational (`Rat`) value.

{% include nav.html %}
