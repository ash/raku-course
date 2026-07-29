---
title: 'Решение: Назовите тип'
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

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Исходный код можно найти в файле [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Вывод

```
(Cat)
True
False
```

## Комментарии

1. `WHAT` возвращает объект типа, показанный в скобках как `(Cat)`, — `$felix` является `Cat`.

1. `===` сравнивает два объекта типа на тождественность. `$felix.WHAT === Cat.WHAT` даёт `True`,
потому что Феликс действительно `Cat`, а `$felix.WHAT === Dog.WHAT` даёт `False` — `Cat` и `Dog`
это разные типы, поэтому их объекты типа не совпадают.

{% include nav.html %}
