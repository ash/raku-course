---
title: Meta-methods
---

{% include menu.html %}

A _meta-method_ is called with `.^` instead of `.`. The ordinary `.method` runs a method of the object; the `.^method` calls a method on the object’s **metaobject** — it asks about the type rather than acting as the type.

You have met `.^name`, which returns the type’s name:

```raku
say 42.^name; # Int
```

Other meta-methods inspect the structure of a type. `.^attributes` lists its attributes, and `.^find_method` tells you whether a method exists:

```raku
class Animal {
    has $.name;
    method speak { 'generic' }
}

say Animal.^attributes.elems;          # 1
say so Animal.^find_method('speak');   # True
say so Animal.^find_method('fly');     # False
```

`.^mro` returns the _method resolution order_ — the chain of types Raku searches, in order, when looking up a method. It is the inheritance line of a class:

```raku
class A {}
class B is A {}

say B.^mro.map(*.^name); # (B A Any Mu)
```

`B` inherits from `A`, and every type ultimately from `Any` and `Mu`, so a method call on a `B` is looked for along exactly that path. These meta-methods turn the structure of your types into data you can query at runtime.

{% include nav.html %}
