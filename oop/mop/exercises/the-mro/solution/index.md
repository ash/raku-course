---
title: The solution of ’The method resolution order‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 You can find the source code in the file [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Output

```
(C B A Any Mu)
```

## Comments

1. `.^mro` returns the chain of types Raku searches when resolving a method.

1. The chain follows the inheritance line one step at a time: `C`, then its parent `B`, then `B`’s parent `A`, and finally `Any` and `Mu`, which every type ends with. A deeper hierarchy simply makes the list longer.

{% include nav.html %}
