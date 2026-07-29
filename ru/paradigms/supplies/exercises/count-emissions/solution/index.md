---
title: 'Решение: Подсчёт выданных значений'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Исходный код можно найти в файле [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Вывод

```
5
```

## Комментарии

1. Подключение выполняется по разу на каждое выданное значение, каковы бы эти значения ни были.

1. Увеличение `$count` каждый раз даёт общее число значений — `5`.

{% include nav.html %}
