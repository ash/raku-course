---
title: 'Решение: Говорящие животные'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Вывод

```
Rex says Woof
Tom says Meow
```

## Комментарии

1. `greet` определён единожды в базовом классе, но он вызывает `self.speak`. Поскольку `self` —
это настоящий объект, вызов попадает в собственный `speak` подкласса.

1. Это и есть полиморфизм: один и тот же `greet` даёт `Woof` для собаки и `Meow` для кошки
без всякого условного кода.

{% include nav.html %}
