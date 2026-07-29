---
title: Методи, що викликають методи
translations_gpt:
---

{% include menu.html %}

Метод може викликати інший метод того самого об'єкта через `self`:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Усередині `describe` виклик `self.area` виконує метод `area` для того самого кола, і його результат використовується для побудови опису.

Ви пишете `self.area` — із крапкою, — щоб викликати метод, точно так само, як його викликав би зовнішній викликач для екземпляра, наприклад `$c.describe`. Це дозволяє будувати складнішу поведінку з менших методів, кожен з яких робить одну справу.

{% include nav.html %}
