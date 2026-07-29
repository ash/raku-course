---
title: 'Розв''язання: Фігура та квадрат'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Shape {
    method name {
        'shape';
    }
    method describe {
        'I am a ' ~ self.name;
    }
}

class Square is Shape {
    method name {
        'square';
    }
}

say Square.new.describe;
```

🦋 Вихідний код можна знайти у файлі [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Вивід

```
I am a square
```

## Коментарі

1. `Square` успадковує `describe` від `Shape` і перевизначає лише `name`.

1. `describe` викликає `self.name`, який підхоплює перевизначений `name`, тож опис каже `square`, а не `shape`.

{% include nav.html %}
