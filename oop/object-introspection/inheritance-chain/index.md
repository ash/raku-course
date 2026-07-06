---
title: The inheritance chain
---

{% include menu.html %}

When one class inherits from another, you can ask for the whole chain of types it is built on. The `.^mro` meta-method returns this chain — the name stands for _method resolution order_, the order in which Raku looks for a method.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Reading from the left: a `Dog` is first itself, then an `Animal` (its parent), then `Any` and `Mu` — the two types that every Raku object inherits from at the very top. When you call a method on a `Dog`, Raku searches this list from left to right and uses the first matching method it finds. That is exactly why a child’s method overrides the parent’s: the child appears earlier in the chain.

For a class with no explicit parent, the chain is shorter — just the class itself, followed by `Any` and `Mu`.

{% include nav.html %}
