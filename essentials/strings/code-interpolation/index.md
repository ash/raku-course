---
title: Code interpolation in Raku strings
---

{% include menu.html %}

The next level of interpolation is code interpolation. It allows you to have simple (and complex too!) code directly inside a double-quoted string.

The interpolated code is placed inside curly braces:

```raku
my $a = 10;
my $b = 20;
say "The sum of $a and $b is {$a + $b}.";
```

The program prints:

```console
$ raku t.raku 
The sum of 10 and 20 is 30.
```

## Variables again

One of the application of this method is to help to disambiguate situations when a variable must be followed by a text that can be wrongly understood as the continuation of the name of the variable. To prevent that, use curly braces to enclose the variable:

```raku
my $how-many = 5;
my $what = 'suit';
say "There are $how-many {$what}s."; # There are 5 suits.
```

Without curly braces, Raku would try to interpolate a non-existent variable `$whats`.

{% include nav.html %}
