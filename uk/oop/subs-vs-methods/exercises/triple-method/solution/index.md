---
title: 'Розв''язання: Потроєння методом'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Вихідний код можна знайти у файлі [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Вивід

```
21
```

## Коментарі

1. Як метод, `triple` належить об'єктові й працює з його власним `n` — нічого передавати не треба.

1. Порівняно з версією-підпрограмою, дані живуть в об'єкті, а не надходять аргументом. Обидва дають `21`.

{% include nav.html %}
