---
title: The solution of ’Animals that speak‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Animal {
    has $.name;
    method speak { '...' }
    method greet { "{$.name} says {self.speak}" }
}

class Dog is Animal { method speak { 'Woof' } }
class Cat is Animal { method speak { 'Meow' } }

for Dog.new(name => 'Rex'), Cat.new(name => 'Tom') -> $pet {
    say $pet.greet;
}
```

🦋 You can find the source code in the file [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Output

```
Rex says Woof
Tom says Meow
```

## Comments

1. `greet` is defined once in the base class, but it calls `self.speak`. Because
`self` is the actual object, the call reaches the subclass’s own `speak`.

1. This is polymorphism: the same `greet` produces `Woof` for a dog and `Meow` for
a cat without any conditional code.

{% include nav.html %}
