---
title: 'Решение: Добавьте метод'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Исходный код можно найти в файле [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Вывод

```
Rex says woof
```

## Комментарии

1. `.^add_method` прикрепляет новый метод к метаобъекту класса во время выполнения; метод задаётся
как анонимный `method { … }`.

1. Добавленный метод — настоящий метод класса, поэтому внутри него `$.name` обращается к атрибуту
`name` объекта точно так же, как это сделал бы метод, написанный в теле класса. После этого
вызова каждый `Dog` откликается на `.speak`.

{% include nav.html %}
