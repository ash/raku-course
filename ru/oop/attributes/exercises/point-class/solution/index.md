---
title: 'Решение: Класс точки'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Исходный код можно найти в файле [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Вывод

```
5
```

## Комментарии

1. Два объявления, `has $.x` и `has $.y`, создают атрибуты вместе с аксессорами для чтения.

1. Каждый объект хранит собственные `x` и `y`, поэтому `$a` и `$b` сообщают разные координаты,
хотя это объекты одного вида. В этой независимости и состоит весь смысл атрибутов: каждый
экземпляр несёт собственные данные.

{% include nav.html %}
