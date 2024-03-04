---
title: Data type and scalar containers
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

In the Essentials chapter, it was shown on how to set the type of the variable using [type constraints](/essentials/typed-variables/type-constraints/). It is now worth noting that it is container that is the container who starts limiting the data values that it can accept.

The following code creates a scalar container that only allows hosting integer data in it:

```raku
my Int $int;
```

Containers with a clearly mentioned type can only accept the values that fit in it. So the following assignments are all valid:

```raku
my Int $int;

$int = 123; # Directly an integer
say $int;

$int = 100 + 23; # The result is integer
say $int;

$int = '123'.Int; # A string converted to an integer
say $int;
```

Raku does not perform automatic type casting. So assigning a floating-point number (which is a `Rat` value in Raku) is not possible:

```raku
my Int $int;
$int = 123.45;
```

You get an error:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable of type Int. You can declare the variable to be of type Real, or try to coerce the value with 123.45.Int or Int(123.45), or just write the value as 123
at t.raku:3
------> <BOL>⏏$int = 123.45;
```

To avoid an error, use explicit type conversion:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Don’t be confused by two dots in `123.45.Int`. The first dot is the decimal point, the second one is used to call the method `Int` on a rational (`Rat`) value.

{% include nav.html %}
