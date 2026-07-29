---
title: 'Решение: Животни, които говорят'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

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

🦋 Намерете програмата във файла [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Изход

```
Rex says Woof
Tom says Meow
```

## Коментари

1. `greet` е дефиниран веднъж в базовия клас, но извиква `self.speak`. Понеже `self` е
действителният обект, извикването стига до собствения `speak` на подкласа.

1. Това е полиморфизъм: един и същ `greet` дава `Woof` за куче и `Meow` за котка без
никакъв условен код.

{% include nav.html %}
