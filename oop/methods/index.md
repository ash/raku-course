---
title: Methods
---

{% include menu.html %}

Attributes give an object its data; _methods_ give it behaviour. A method is a subroutine that belongs to a class and is called on an object. You declare one with the `method` keyword:

```raku
class Dog {
    has $.name;

    method bark {
        return $.name ~ ' says Woof!';
    }
}
```

Call a method on an object using the dot, just like an accessor:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.bark; # Rex says Woof!
```

Inside a method, the object on which the method was called is available as `self`. The attributes are reached through their accessors, written `$.name`, `$.age`, and so on. These also work inside interpolated strings:

```raku
class Dog {
    has $.name;

    method greet {
        "Hello, my name is $.name";
    }
}

say Dog.new(name => 'Rex').greet; # Hello, my name is Rex
```

The following topics cover private attributes (now that we have methods to use them), methods that take parameters, and methods that call other methods.

{% include nav.html %}
