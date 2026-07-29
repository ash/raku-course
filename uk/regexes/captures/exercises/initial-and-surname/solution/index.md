---
title: 'Розв''язання: Ініціал і прізвище'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Вихідний код можна знайти у файлі [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Вивід

```
Smith
```

## Коментарі

1. `$<initial>=(\w)` захоплює один словесний символ; `$<surname>=(\w+)` захоплює низку літер після пробілу.

1. Прізвище потім зчитують назад за іменем як `$<surname>`, а префікс `~` виводить його як звичайний рядок; без нього `say $<surname>` показав би об'єкт збігу як `｢Smith｣`.

{% include nav.html %}
