---
title: 'Розв''язання: Площа прямокутника'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Вивід

```
area is 12
```

## Коментарі

1. Метод `area` читає власні `width` та `height` об'єкта через їхні аксесори й перемножує їх — для прямокутника `3` на `4` це `12`.

1. Метод `describe` не повторює цього обчислення. Натомість він викликає `self.area`, виконуючи метод `area` для того самого об'єкта й повторно використовуючи його результат. Побудова більшої поведінки з менших методів у такий спосіб лишає кожен метод відповідальним за одну справу.

{% include nav.html %}
