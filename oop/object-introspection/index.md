---
title: Introspecting objects
---

{% include menu.html %}

In the [section about containers](/advanced/containers) you used `.^name` to ask a value for its type. The same `.^` meta-calls let you inspect a class and its objects: their names, their attributes, and where they sit in a hierarchy.

The `.^name` meta-method returns the name of the class:

```raku
class Dog {
    has Str $.name;
    method bark { 'Woof' }
}

say Dog.^name; # Dog
```

The `.^attributes` meta-method lists the attributes of the class. Each is shown with its type and its internal private name (the `$!` form you met with [private attributes](/oop/methods/private-attributes)):

```raku
say Dog.^attributes; # (Str $!name)
```

Introspection is useful for tools that work with objects generically — for example, to print every attribute of an object without knowing its class in advance. The next topic looks at how to see a class’s inheritance chain.

{% include nav.html %}
