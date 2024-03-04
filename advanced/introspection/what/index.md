---
title: Using WHAT in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

`WHAT` is a pseudo-method that gives access to information about the type of the variable.

You can use it in the same way you use `^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

The program prints the type of the value with some minor decoration differencies:

```
Int
(Int)
```

Notice that for a variable without type constraints, the default type is `Any`. As soon as you assign a value, the type returned by `^name` and `WHAT` changes:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

With a type constrait, the type of the contents of the container is known immediately after creation:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

{% include nav.html %}
