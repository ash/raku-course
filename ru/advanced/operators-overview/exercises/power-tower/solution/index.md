---
title: 'Решение: Башня степеней'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
say 2 ** 2 ** 3;
```

🦋 Исходный код можно найти в файле [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Вывод

```
256
```

## Комментарии

1. Поскольку `**` является правоассоциативным, выражение группируется как `2 ** (2 ** 3)`.

1. Это `2 ** 8`, что равно `256`, а не `(2 ** 2) ** 3`, что было бы `64`.

{% include nav.html %}
