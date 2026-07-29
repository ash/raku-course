---
title: 'Розв''язання: Ключ і значення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %h = x => 10, y => 20;
say %h<x>:kv;
```

🦋 Вихідний код можна знайти у файлі [key-and-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/key-and-value.raku).

## Вивід

```
(x 10)
```

## Коментарі

1. Наріччя `:kv` повертає і ключ, і значення як список.

1. Для хеша ключем є те ім'я, за яким ви індексуєте, тож `%h<x>:kv` дає список `(x 10)`.

{% include nav.html %}
