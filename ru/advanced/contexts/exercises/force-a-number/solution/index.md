---
title: 'Решение: Преобразование в число'
translations_gpt: Решение задачи «Приведение к числу»
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my @a = 1, 2, 3;
say +@a;
```

🦋 Исходный код можно найти в файле [force-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/force-a-number.raku).

## Вывод

```
3
```

## Комментарии

1. Префикс `+` принудительно задаёт числовой контекст.

1. В числовом контексте массив становится количеством своих элементов, поэтому результат равен `3`.

{% include nav.html %}
