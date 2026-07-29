---
title: 'Розв''язання: Абсолютне значення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Вихідний код можна знайти у файлі [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Вивід

```
7
4
```

## Коментарі

1. Перший кандидат збігається лише з від'ємними числами й повертає значення зі зміненим знаком, яке є додатним.

1. Кожне інше число — нуль і додатні — потрапляє до другого кандидата, який повертає значення без змін.

{% include nav.html %}
