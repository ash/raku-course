---
title: Розв'язання вправи «Тварини, що говорять»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [animal-inheritance.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/animal-inheritance.raku).

## Вивід

```
Rex says Woof
Tom says Meow
```

## Коментарі

1. `greet` означено один раз у базовому класі, але він викликає `self.speak`.
Оскільки `self` є справжнім об'єктом, виклик дістає власний `speak` підкласу.

1. Це поліморфізм: той самий `greet` дає `Woof` для собаки й `Meow` для кота без
жодного умовного коду.

{% include nav.html %}
