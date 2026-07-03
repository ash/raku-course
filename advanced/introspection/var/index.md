---
title: Using `VAR`
---

{% include menu.html %}

`VAR` is a pseudo-method that returns the underlying container object. For a scalar variable, the `.VAR` call returns the `Scalar` container behind it.

## `^name`

Once you have the container, you can ask for the name of its class with `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` on the variable returns the type of the _value_ (`Int` or `Str`), while `.VAR.^name` returns the type of the _container_, which is `Scalar` in both cases.

## `default`

The `default` method returns the default value of the container — what you get when the container holds nothing of its own. With the `is default` trait you set it explicitly:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Without an explicit default, the default value is the container’s type. For an untyped container that is `Any`, regardless of what value it currently holds:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

For a typed container it is the constraint type:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

The `name` method returns the name of the container, including the sigil:

```raku
my $language;
say $language.VAR.name; # $language
```

Take care not to mix up `^name` (the type) and `name` (the variable’s own name).

{% include nav.html %}
