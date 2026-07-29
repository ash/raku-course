---
title: 'Розв''язання: Чи існує ключ'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Вихідний код можна знайти у файлі [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Вивід

```
False
```

## Коментарі

1. Наріччя `:exists` повертає, чи присутній ключ, не дістаючи значення.

1. У хеші немає ключа `z`, тож воно повертає `False` — і, на відміну від звичайного пошуку, не створює ключ як побічний ефект.

{% include nav.html %}
