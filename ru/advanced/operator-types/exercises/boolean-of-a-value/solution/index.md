---
title: 'Решение: Булево значение'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
say ?0;
say ?5;
```

🦋 Исходный код можно найти в файле [boolean-of-a-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/boolean-of-a-value.raku).

## Вывод

```
False
True
```

## Комментарии

1. `?` — это префиксный оператор: он стоит перед своим операндом и возвращает его булево значение.

1. `0` является ложным, а `5` — истинным, поэтому программа выводит `False` и `True`.

{% include nav.html %}
