---
title: 'Решение: Существует ли ключ'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Исходный код можно найти в файле [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Вывод

```
False
```

## Комментарии

1. Наречие `:exists` возвращает информацию о том, присутствует ли ключ, не извлекая значение.

1. В хеше нет ключа `z`, поэтому результат — `False`. При этом, в отличие от обычного обращения, ключ не создаётся как побочный эффект.

{% include nav.html %}
