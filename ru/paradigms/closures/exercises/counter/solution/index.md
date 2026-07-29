---
title: 'Решение: Счётчик'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
sub make-counter($step) {
    my $n = 0;
    return sub { $n += $step };
}

my &count = make-counter(10);
say count();
say count();
say count();
```

🦋 Исходный код можно найти в файле [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/counter.raku).

## Вывод

```
10
20
30
```

## Комментарии

1. Замыкание захватывает из `make-counter` две вещи: параметр `$step` и скрытую переменную `$n`.
Обе остаются живыми после того, как `make-counter` вернулся.

1. Каждый вызов прибавляет `$step` к `$n` и возвращает новый итог. Счётчик, построенный с другим
шагом, продвигался бы на другую величину.

{% include nav.html %}
