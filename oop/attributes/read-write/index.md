---
title: Read-write attributes
---

{% include menu.html %}

By default, the accessor created by `has $.name` is _read-only_. The value is initialised in the constructor, after which you can read the value but not change it from outside the object. Assigning to it is an error:

```raku
class Dog {
    has $.name;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
```

This stops with:

```
Cannot modify an immutable Str (Rex)
```

To allow the value to be changed through the accessor, mark the attribute with the `is rw` trait:

```raku
class Dog {
    has $.name is rw;
}

my $rex = Dog.new(name => 'Rex');
$rex.name = 'Max';
say $rex.name; # Max
```

Now the accessor returns a writable container, so the assignment works and the object’s `name` becomes `Max`.

{% include nav.html %}
