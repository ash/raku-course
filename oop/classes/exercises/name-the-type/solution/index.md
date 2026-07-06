---
title: The solution of ’Name the type‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Cat {
}

class Dog {
}

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 You can find the source code in the file [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Output

```
(Cat)
True
False
```

## Comments

1. `WHAT` returns the type object, shown in parentheses as `(Cat)` — `$felix` is a `Cat`.

1. `===` compares two type objects for identity. `$felix.WHAT === Cat.WHAT` is `True` because Felix really is a `Cat`, while `$felix.WHAT === Dog.WHAT` is `False` — a `Cat` and a `Dog` are different types, so their type objects are not the same.

{% include nav.html %}
