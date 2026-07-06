---
title: Overriding methods
---

{% include menu.html %}

A child class can provide its own version of an inherited method. This is called _overriding_. When the method is called on an object of the child class, the child’s version runs instead of the parent’s.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` and `Cat` each override `speak`. The `intro` method, inherited unchanged from `Animal`, calls `self.speak` — and that call uses whichever `speak` belongs to the actual object:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

So the same inherited `intro` produces different results, because each object brings its own `speak`. This is one of the central ideas of object-oriented programming: shared code that adapts to the specific kind of object it works on.

{% include nav.html %}
