---
title: Composing several roles
---

{% include menu.html %}

A class can do more than one role. You simply list each one with its own `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

The `Duck` class now has both the `move` method from `Walk` and the `dive` method from `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Combining roles like this is called _composition_. It lets you assemble a class from several independent pieces of behaviour, which is often more flexible than building a single chain of inheritance — a class can mix in exactly the capabilities it needs, and nothing more.

{% include nav.html %}
