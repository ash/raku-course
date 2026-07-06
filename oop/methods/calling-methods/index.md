---
title: Methods calling methods
---

{% include menu.html %}

A method can call another method on the same object through `self`:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Inside `describe`, the call `self.area` runs the `area` method on the same circle, and its result is used to build the description.

You write `self.area` — with the dot — to call a method, just as an outside caller would call it on an instance, e.g.: `$c.describe`. This lets you build more complex behaviour out of smaller methods, each doing one job.

{% include nav.html %}
