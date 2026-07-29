---
title: 'Решение: Километры в мили'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Исходный код можно найти в файле [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Вывод

```
6.21
```

## Комментарии

1. Перевод не зависит ни от какого конкретного объекта, поэтому он написан как метод класса
и вызывается прямо у `Converter`.

1. Метод класса всё равно может принимать параметры: здесь он получает число километров
и возвращает мили.

{% include nav.html %}
