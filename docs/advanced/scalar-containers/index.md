---
title: Scalar containers
---

{% include menu.html %}

As the name suggests, scalar containers host single (scalar) values. Such containers are marked with the `$` sigil.

Here is one of the simplest and most direct uses of a scalar:

```raku
my $lang = 'Raku';
```

The `$lang` variable is a scalar container.

By default, scalar containers do not enforce a type on the data, so you can store a value of any type in them. The simplest demonstration of this is that you can reuse the same variable to store an integer and then a string:

```raku
my $value = 42;
$value = 'forty-two';
```

(The author does not encourage you to programm like this.)

Internally, this means that, by default, a new container can keep values of the `Any` type. `Any` is the base type for most other types, such as `Int` or `Str`.

{% include nav.html %}
