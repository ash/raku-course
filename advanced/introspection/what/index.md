---
title: Using `WHAT`
---

{% include menu.html %}

`WHAT` is a pseudo-method that gives access to the type of a value. You can use it in much the same way as `.^name`:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

The two print the type with a minor difference in decoration: `.^name` gives the bare name, while `WHAT` shows the type object, written in parentheses:

```
Int
(Int)
```

For a variable without a type constraint, the type starts as `Any`. As soon as you assign a value, both `^name` and `WHAT` follow the type of the stored value:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

With a type constraint, the type is known immediately, even before anything is assigned:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

{% include nav.html %}
