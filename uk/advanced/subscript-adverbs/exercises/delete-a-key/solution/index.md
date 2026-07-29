---
title: 'Розв''язання: Видаліть ключ'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %h = a => 1, b => 2, c => 3;
%h<b>:delete;
say %h.elems;
```

🦋 Вихідний код можна знайти у файлі [delete-a-key.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/delete-a-key.raku).

## Вивід

```
2
```

## Коментарі

1. Наріччя `:delete` вилучає запис із хеша (тут ми ігноруємо значення, яке воно повертає).

1. Хеш починав із трьох записів, а тепер має `2`, що підтверджує вилучення одного. Підрахунок через `.elems` робить вивід передбачуваним, не залежачи від порядку ключів.

{% include nav.html %}
