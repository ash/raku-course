---
title: 'Розв''язання: Кілометри в милі'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Вихідний код можна знайти у файлі [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Вивід

```
6.21
```

## Коментарі

1. Переведення не залежить від жодного конкретного об'єкта, тож його записано як метод класу й викликано безпосередньо для `Converter`.

1. Метод класу все одно може приймати параметри: тут він отримує кількість кілометрів і повертає милі.

{% include nav.html %}
