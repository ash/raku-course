---
title: 'Решение: Инициал и фамилия'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Исходный код можно найти в файле [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Вывод

```
Smith
```

## Комментарии

1. `$<initial>=(\w)` захватывает один словесный символ; `$<surname>=(\w+)` захватывает вереницу
букв после пробела.

1. Затем фамилию читают обратно по имени, как `$<surname>`, а префикс `~` печатает её как обычную
строку; без него `say $<surname>` показал бы объект совпадения как `｢Smith｣`.

{% include nav.html %}
