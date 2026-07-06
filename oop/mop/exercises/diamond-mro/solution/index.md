---
title: The solution of ’A diamond of classes‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class A {
}

class B is A {
}

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 You can find the source code in the file [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Output

```
(D B C A Any Mu)
```

## Comments

1. `D` inherits from two parents at once — `class D is B is C` lists each of them with its own `is`. This is multiple inheritance, and `A`, `B`, `C`, `D` form a *diamond*: two paths from `D` up to the shared ancestor `A`.

1. `.^mro` flattens that diamond into a single, linear search order. `D` comes first, then its parents `B` and `C` in the order they were written, then the shared `A`, and finally `Any` and `Mu`.

1. Even though both `B` and `C` lead to `A`, the type `A` appears **once**, and only after both of them. That is the point of a method resolution order: every type is visited exactly once, and a parent never comes before a child that inherits from it — so a method defined in `B` is always found before the one it would override in `A`.

{% include nav.html %}
