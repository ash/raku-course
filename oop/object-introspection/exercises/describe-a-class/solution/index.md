---
title: The solution of ’Describe a class‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^name;
say Dog.^mro.elems;
say 'Cat' ∈ Dog.^mro.map(*.^name);
```

🦋 You can find the source code in the file [describe-a-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/describe-a-class.raku).

## Output

```
Dog
4
False
```

## Comments

1. `.^name` returns the class’s own name, `Dog`.

1. `.^mro` returns the inheritance chain, and `.elems` counts it. There are four types in the chain — `Dog`, its parent `Animal`, and the universal `Any` and `Mu` — so the count is `4`.

1. `.^mro.map(*.^name)` turns that chain into the list of type names, `(Dog Animal Any Mu)`. The `∈` set-membership operator then checks whether `Cat` is one of them. `Dog` does not descend from any `Cat`, so the answer is `False`.

{% include nav.html %}
