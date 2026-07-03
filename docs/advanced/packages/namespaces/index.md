---
title: Namespaces and our
---

{% include menu.html %}

The `our` declarator is what makes something visible in its namespace. A variable declared with `my` is lexical — private to its block — whereas one declared with `our` is also a package variable, reachable from outside through the `::` path:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` works because `count` was declared with `our`; `$Counter::secret` would fail, because `secret` is lexical.

Namespaces can **nest**. A package inside a package builds a longer `::` path:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

The full name `$Outer::Inner::val` walks from the outer namespace, into the inner one, to the variable. This is exactly how the standard library is organised — names like `IO::Socket::INET` are nested namespaces — and how a module you write groups its parts under one top-level name.

{% include nav.html %}
