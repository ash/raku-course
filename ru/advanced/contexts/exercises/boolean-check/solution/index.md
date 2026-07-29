---
title: 'Решение: Булева проверка'
translations_gpt: Решение задачи «Логическая проверка»
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my @empty;
say ?@empty;
```

🦋 Исходный код можно найти в файле [boolean-check.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/boolean-check.raku).

## Вывод

```
False
```

## Комментарии

1. Префикс `?` принудительно задаёт логический контекст.

1. Пустой массив является ложным, и именно на этом основана проверка `if @array`.

{% include nav.html %}
