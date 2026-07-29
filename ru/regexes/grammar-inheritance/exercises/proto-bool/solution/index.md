---
title: 'Решение: Булево значение с proto'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Исходный код можно найти в файле [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Вывод

```
True
True
False
```

## Комментарии

1. У proto-токена `bool` два именованных варианта: `true` и `false`.

1. Каждый разбор выбирает подходящий вариант, поэтому и `'true'`, и `'false'` проходят успешно.
Proto-токен — принятый в грамматиках аккуратный способ сказать «одна из вот этих именованных
альтернатив».

1. `'unknown'` не подходит ни под один вариант, поэтому proto-токену не на что диспетчеризовать
и разбор не удаётся — `False`. Proto принимает ровно те альтернативы, которые вы перечислили,
и ничего сверх того.

{% include nav.html %}
