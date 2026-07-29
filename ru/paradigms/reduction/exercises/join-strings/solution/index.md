---
title: 'Решение: Соедините строки'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say [~] '2', '0', '2', '5';
```

🦋 Исходный код можно найти в файле [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Вывод

```
2025
```

## Комментарии

1. `[~]` вставляет между строками оператор конкатенации `~`.

1. `'2' ~ '0' ~ '2' ~ '5'` даёт единственную строку `2025`.

{% include nav.html %}
