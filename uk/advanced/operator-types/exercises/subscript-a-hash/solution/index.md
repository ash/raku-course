---
title: 'Розв''язання: Індексуйте хеш'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %h = a => 1;
say %h<a>;
```

🦋 Вихідний код можна знайти у файлі [subscript-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/subscript-a-hash.raku).

## Вивід

```
1
```

## Коментарі

1. Індекс `< >` є постциркумфіксним оператором: він іде за термом (хешем) і оточує ключ.

1. `%h<a>` повертає значення, збережене під ключем `a`, тобто `1`.

{% include nav.html %}
