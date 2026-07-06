---
title: Attributes
---

{% include menu.html %}

An empty class is not very useful. To let an object carry its own data, you give the class _attributes_. An attribute is declared inside the class with the `has` keyword:

```raku
class Dog {
    has $.name;
    has $.age;
}
```

Each object of the class gets its own copy of these attributes. You set their values when you create the object, by passing them to `new` as named arguments:

```raku
class Dog {
    has $.name;
    has $.age;
}

my $rex = Dog.new(name => 'Rex', age => 3);
```

The `$.` in `has $.name` does two things at once: it declares an attribute, and it creates a method of the same name — an _accessor_ — that returns the attribute’s value:

```raku
say $rex.name; # Rex
say $rex.age;  # 3
```

Different objects hold their own values, independently of one another:

```raku
my $rex  = Dog.new(name => 'Rex',  age => 3);
my $fido = Dog.new(name => 'Fido', age => 5);

say $rex.name;  # Rex
say $fido.name; # Fido
```

The following topics show how to make attributes changeable and how to give them default values. (There is also a way to declare _private_ attributes, hidden from the outside; we return to it once methods are introduced.)

{% include nav.html %}
