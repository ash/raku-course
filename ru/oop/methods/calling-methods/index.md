---
title: Методы, вызывающие методы
translations_gpt:
---

{% include menu.html %}

Метод может вызвать другой метод того же объекта через `self`:

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

Внутри `describe` вызов `self.area` выполняет метод `area` у той же самой окружности, и его
результат используется для построения описания.

Чтобы вызвать метод, пишут `self.area` — через точку, — точно так же, как это сделал бы внешний
вызывающий код у экземпляра, например `$c.describe`. Это позволяет собирать более сложное
поведение из небольших методов, каждый из которых делает одну работу.

{% include nav.html %}
