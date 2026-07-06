---
title: Inheritance
---

{% include menu.html %}

_Inheritance_ lets one class build on another. A class declared with `is` after its name inherits the attributes and methods of the class it names — its _parent_ (or _base_) class.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
}

class Dog is Animal {
}
```

`Dog is Animal` means a `Dog` is a kind of `Animal`. Without writing anything new, `Dog` already has the `name` attribute and the `speak` method from `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

A `Dog` object is also recognised as an `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

The smart-match `~~` against a type is true when the object is of that type or inherits from it. The next topic shows how a child class can replace an inherited method with its own version.

{% include nav.html %}
