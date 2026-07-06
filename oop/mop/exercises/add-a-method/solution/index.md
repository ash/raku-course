---
title: The solution of ’Add a method‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 You can find the source code in the file [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Output

```
Rex says woof
```

## Comments

1. `.^add_method` attaches a new method to the class’s metaobject at runtime, given as an anonymous `method { … }`.

1. The added method is a real method of the class, so inside it `$.name` reaches the object’s `name` attribute, just as a method written in the class body would. After the call, every `Dog` responds to `.speak`.

{% include nav.html %}
