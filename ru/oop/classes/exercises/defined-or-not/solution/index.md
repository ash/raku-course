---
title: 'Решение: Определён или нет'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Cat {
}

class Dog {
}

for Cat, Dog, Cat.new, Dog.new -> $thing {
    say $thing.defined;
}
```

🦋 Исходный код можно найти в файле [defined-or-not.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/defined-or-not.raku).

## Вывод

```
False
False
True
True
```

## Комментарии

1. Цикл проходит по смеси объектов типа (`Cat`, `Dog`) и экземпляров (`Cat.new`, `Dog.new`).

1. Оба объекта типа не определены, поэтому `defined` возвращает для них `False`; оба экземпляра
определены, поэтому возвращается `True`. Определённость зависит от того, является ли значение
объектом типа или настоящим экземпляром, а не от того, какому классу оно принадлежит.

{% include nav.html %}
