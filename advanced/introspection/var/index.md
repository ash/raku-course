---
title: Using VAR in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

`VAR` is a pseudo-method that retuns the underlying container object. The `.VAR` call returns a `Scalar` object of the container.

## `^name`

After calling `.VAR`, you can further get the name of its class by calling `.^name` on it.

Examine the following program:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

Here, two variables are filled with an integer and a string. The `.^name` meta-object method returns the name of the type, which is correspondently `Int` or `Str`.

## `default`

The `default` method returns the default value of the variable.

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

If the default value is not defined explicitly, you see the name of the class of the value kept in the container:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Str)
```

Or its type constraint:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

The `name` method returns the name of the container, including the sigil.

```raku
my $language;
say $language.VAR.name; # $language
```

Make sure to not mix `^name` and `name`.

{% include nav.html %}
