---
title: The solution of ’Defined or not‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 You can find the source code in the file [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Output

```
False
False
True
True
```

## Comments

1. The loop walks over a mix of type objects (`Cat`, `Dog`) and instances (`Cat.new`, `Dog.new`).

1. Both type objects are undefined, so `defined` returns `False` for them; both instances are defined, so it returns `True`. Definedness depends on whether a value is a type object or a real instance — not on which class it belongs to.

{% include nav.html %}
