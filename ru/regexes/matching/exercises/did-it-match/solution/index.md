---
title: 'Решение: Совпало ли?'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Исходный код можно найти в файле [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Вывод

```
True
```

## Комментарии

1. Успешное сопоставление — истинное значение, но печатается оно как объект совпадения. Функция
`so` превращает его в простое `True` или `False`.

{% include nav.html %}
