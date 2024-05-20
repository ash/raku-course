---
title: Introspecting scalar containers in Raku
---

{% assign menu_for_part = page.url | replace: "/", "" %}
{% include menu.html %}

MOP stands for Meta-object protocol. In Raku, it allows to get additional information about the objects in the program, such as containers or variables.

Condider a type-constrained variable:

```
my Int $int;
```

Debugging this variable using `.^name` reveals its type.

```
my Int $int;
say $int.^name; # Int
```

In this program, `^name` is a built-in method that returns the type of the value kept in the container. This is a part of the so-called metaobject that contains meta-information about the container.

Here is a modified example from the [earlier topic](/advanced/scalar-containers/types/):

```raku
my $value;
say $value.^name;

$value = 42;
say $value.^name;

$value = 'fourty-two';
say $value.^name;
```

This time, the program only prints type names:

```
Any
Int
Str
```


{% include nav.html %}
