---
title: Classes
---

{% include menu.html %}

So far, the data types you have used — numbers, strings, arrays, and so on — were all built into Raku. _Object-oriented programming_ lets you define your own types, called _classes_, and create values of those types, called _objects_.

A class is defined with the `class` keyword, followed by a name and a block:

```raku
class Dog {
}
```

This `Dog` class is empty for now, but it is already a new type. To create an object of the class — an _instance_ — call the `new` method on the class name:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

The variable `$rex` now holds a `Dog` object. Every call to `new` creates a separate object:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` and `$fido` are two distinct dogs, even though the class has no contents yet. In the following sections you will give a class its own data (_attributes_) and its own behaviour (_methods_). The first topic looks more closely at the difference between a class and its instances.

{% include nav.html %}
