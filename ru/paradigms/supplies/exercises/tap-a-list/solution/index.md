---
title: 'Решение: Подключитесь к списку'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Исходный код можно найти в файле [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Вывод

```
red
green
blue
```

## Комментарии

1. `Supply.from-list` выдаёт три строки по порядку.

1. Подключение выполняется по разу для каждой из них и печатает её.

{% include nav.html %}
