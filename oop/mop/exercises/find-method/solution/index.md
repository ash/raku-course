---
title: The solution of ’Find a method‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 You can find the source code in the file [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Output

```
True
```

## Comments

1. `.^find_method` returns the method if it exists, or an undefined value if not. The `so` turns that into a plain Boolean.

1. `Dog` defines no methods itself, yet the result is `True`: `find_method` searches the whole inheritance chain and finds `speak` up in `Animal`. This mirrors how an actual method call on a `Dog` would locate the inherited method.

{% include nav.html %}
