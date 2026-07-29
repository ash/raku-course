---
title: 'Решение: Все чётные'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so all(2, 4, 6) %% 2;
```

🦋 Исходный код можно найти в файле [all-even.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/all-even.raku).

## Вывод

```
True
```

## Комментарии

1. Проверка идёт с автопоточностью: `%% 2` применяется к каждому значению, а джанкшен `all`
требует, чтобы прошло каждое.

1. Все три числа чётные, поэтому результат — `True`. Будь хоть одно нечётным, получилось бы
`False`.

{% include nav.html %}
