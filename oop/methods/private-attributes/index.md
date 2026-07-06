---
title: Private attributes
---

{% include menu.html %}

In the [section about attributes](/oop/attributes), each attribute was declared with `$.`, which creates a public accessor. An attribute declared with `$!` instead is _private_: it has no accessor and cannot be seen from outside the object. It is reachable only from within the class’s own methods, where you refer to it as `$!name`.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

The secret `$!code` is stored inside the object but never exposed: there is no `.code` accessor, so the only way to interact with it is through the `unlocks` method that the class chooses to provide. An attempt to read `$safe.code` or `$safe!code` simply fails.

Private attributes are useful for internal details that the rest of the program should not touch directly.

{% include nav.html %}
