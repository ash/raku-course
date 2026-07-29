---
title: 'Решение: Отфильтруйте supply'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Исходный код можно найти в файле [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Вывод

```
[2 4 6]
```

## Комментарии

1. `grep(* %% 2)` создаёт новый supply, который передаёт дальше только чётные значения, — точно
так же, как `grep` фильтрует список.

1. Подключение собирает эти значения в `@out`, давая `[2 4 6]`.

{% include nav.html %}
