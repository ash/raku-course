---
title: 'Решение: Площадь прямоугольника'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Rectangle {
    has $.width;
    has $.height;

    method area {
        $.width * $.height;
    }

    method describe {
        "area is " ~ self.area;
    }
}

say Rectangle.new(width => 3, height => 4).describe;
```

🦋 Исходный код можно найти в файле [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Вывод

```
area is 12
```

## Комментарии

1. Метод `area` читает собственные `width` и `height` объекта через их аксессоры и перемножает
их — для прямоугольника `3` на `4` это `12`.

1. Метод `describe` не повторяет это вычисление. Вместо этого он вызывает `self.area`, выполняя
метод `area` у того же объекта и переиспользуя его результат. Такая сборка большего поведения
из меньших методов оставляет за каждым методом ровно одну работу.

{% include nav.html %}
