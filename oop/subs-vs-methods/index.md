---
title: Subroutines vs methods
---

{% include menu.html %}

You now have two ways to package a piece of behaviour: a _subroutine_ and a _method_. They look similar but are used differently.

A subroutine stands on its own. You call it by its name and pass it everything it needs as arguments:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

A method belongs to a class and is called on an object with the dot. It can use the object’s own data through `self` and the attribute accessors, so you do not pass that data in:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Both compute the same number. The difference is where the data comes from: the subroutine receives the radius as an argument, while the method reads it from the object it was called on.

As a rule of thumb, use a subroutine for a standalone operation that simply transforms its arguments, and a method when the behaviour naturally belongs to an object and works with that object’s own state. For class-specific, but generic routines, use class methods.

{% include nav.html %}
