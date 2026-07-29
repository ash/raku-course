---
title: 'Решение: Удаление ключа'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Исходный код можно найти в файле [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Вывод

```
2
```

## Комментарии

1. Наречие `:delete` удаляет запись из хеша (здесь мы игнорируем возвращаемое значение).

1. В хеше изначально было три записи, а теперь осталось `2`, что подтверждает удаление одной из них. Подсчёт с помощью `.elems` даёт предсказуемый вывод, не зависящий от порядка ключей.

{% include nav.html %}
