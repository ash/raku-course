---
title: 'Решение: Индексация хеша'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Исходный код можно найти в файле [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Вывод

```
1
```

## Комментарии

1. Оператор обращения `< >` является постциркумфиксным: он следует за термом (хешем) и окружает ключ.

1. `%h<a>` возвращает значение, хранящееся по ключу `a`, которое равно `1`.

{% include nav.html %}
