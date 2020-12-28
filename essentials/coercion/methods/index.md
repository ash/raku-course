---
title: Converting types using type coercion methods
---

{% include menu.html %}

To convert, or to _coerce_ a type, call a method with the name of the data type. For example, convert a string into an integer number:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

In many cases, you don’t need to convert values explicitly, as Raku does that job for you. The following code is a working correctly and predictably:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

The two variables, `$a` and `$b`, contain strings, but they are used in an arithmetical expression with `+`. At this point, both strings are converted to integers, and thus `$c` also gets an integer. In the last line, a variable containing an integer is interpolated in a string, so Raku does the necessary operations to present the number as a sequence of digit characters.

{% include nav.html %}
