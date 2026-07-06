---
title: Type objects and instances
---

{% include menu.html %}

When you write a class name such as `Dog`, you are referring to the _type object_ of the class. The type object represents the type itself, not any particular object of that type. An _instance_, created with `new`, is an actual object.

Raku can tell the two apart. The `defined` method returns `False` for a type object and `True` for an instance:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

A type object is considered _undefined_ because it holds no concrete data — it is only the description of a type. An instance is _defined_: it is a real object.

Both report the same type through `WHAT`, which you met in the [section about containers](/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

The parentheses around `(Dog)` are Raku’s way of showing a type. So `Dog` and `Dog.new` share the type `Dog`; the difference is that one is the type itself, and the other is an object of that type.

{% include nav.html %}
