---
title: 'Решение: Лице на правоъгълник'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Изход

```
area is 12
```

## Коментари

1. Методът `area` чете собствените `width` и `height` на обекта през аксесорите им и ги умножава — за правоъгълник `3` на `4` това е `12`.

1. Методът `describe` не повтаря това пресмятане. Вместо това извиква `self.area`, изпълнявайки метода `area` върху същия обект и използвайки повторно резултата му. Изграждането на по-голямо поведение от по-малки методи по този начин държи всеки метод отговорен за една задача.

{% include nav.html %}
