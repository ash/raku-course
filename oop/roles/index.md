---
title: Roles
---

{% include menu.html %}

A _role_ is a bundle of behaviour (and sometimes data) that can be shared by several classes. Where inheritance says a class _is a_ kind of another, a role describes something a class _can do_.

You define a role with the `role` keyword, much like a class, and you give it to a class with the `does` trait:

```raku
role Greet {
    method hello {
        'Hello from ' ~ self.name;
    }
}

class Person does Greet {
    has $.name;
}
```

The `Person` class now has the `hello` method from the role, as if it were written in the class itself:

```raku
say Person.new(name => 'Anna').hello; # Hello from Anna
```

A class that does a role is recognised as having that role:

```raku
say Person.new(name => 'Anna') ~~ Greet; # True
```

Notice that the role’s `hello` method uses `self.name`, even though the role itself has no `name` attribute. That is fine: the method runs as part of whatever class composes the role, and that class provides `name`. The next topic shows that a class can take on more than one role at a time.

{% include nav.html %}
