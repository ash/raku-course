---
title: Scalar containers in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

As it can be understood from the name, scalar containers host single (scalar) values. Such containers are marked with the `$` sigil.

Here is one of the simplest and direct use of scalars:

```raku
my $lang = 'Raku';
```

The `$lang` variable is a scalar container.

Scalar containers are type-irrelevant by default, so youy can host data of any type you need. The simplest demonstration of that is the fact that it is possible to reuse the same variable and store integers or strings in it:

```raku
my $value = 42;
$value = 'fourty-two';
```

Internally, this means that by default, a new container can keep values of the `Any` type. This is a base data type for other types such as `Int` or `String`.

{% include nav.html %}
