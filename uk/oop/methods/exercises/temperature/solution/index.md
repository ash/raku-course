---
title: 'Розв''язання: Переведення температури'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Вихідний код можна знайти у файлі [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Вивід

```
212
```

## Коментарі

1. Метод працює з власним атрибутом `degrees` об'єкта, тож формулі не потрібен жоден переданий аргумент.

1. Для `100` градусів Цельсія результатом є `212` градусів Фаренгейта.

{% include nav.html %}
