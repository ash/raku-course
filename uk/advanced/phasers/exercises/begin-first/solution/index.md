---
title: 'Розв''язання: Спочатку BEGIN'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Вихідний код можна знайти у файлі [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Вивід

```
5
```

## Коментарі

1. `BEGIN { 2 + 3 }` виконується під час компіляції й дає `5`. Використаний як вираз, блок `BEGIN` повертає своє значення, яке присвоюється `$compiled`.

1. Обчислення відбувається лише раз, під час компіляції; до моменту виконання `$compiled` просто містить сталу `5`. Саме так `BEGIN` використовують для попереднього обчислення значень, а не тільки для раннього друку.

{% include nav.html %}
