---
title: Розв'язання вправи «Підключіться до списку»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
Supply.from-list('red', 'green', 'blue').tap(-> $v { say $v });
```

🦋 Знайдіть програму у файлі [tap-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/tap-a-list.raku).

## Вивід

```
red
green
blue
```

## Коментарі

1. `Supply.from-list` видає три рядки по порядку.

1. Підключення виконується по разу для кожного, друкуючи його.

{% include nav.html %}
