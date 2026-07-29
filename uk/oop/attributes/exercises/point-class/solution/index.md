---
title: 'Розв''язання: Клас точки'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Вивід

```
5
```

## Коментарі

1. Два оголошення `has $.x` та `has $.y` створюють атрибути разом із їхніми аксесорами для читання.

1. Кожен об'єкт зберігає власні `x` та `y`, тож `$a` і `$b` повідомляють різні координати, хоча є об'єктами того самого роду. Ця незалежність і є весь сенс атрибутів — кожен екземпляр несе власні дані.

{% include nav.html %}
