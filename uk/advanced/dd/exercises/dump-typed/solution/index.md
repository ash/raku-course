---
title: 'Розв''язання: Вивести дамп типізованої змінної'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my Int $n = 42;
dd $n;
```

🦋 Вихідний код можна знайти у файлі [dump-typed.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-typed.raku).

## Вивід

```
Int $n = 42
```

## Коментарі

1. Оскільки змінна має оголошений тип, `dd` виводить цей тип перед іменем: `Int $n = 42`.

1. Нетипізовану змінну було б виведено просто як `$n = 42`, без типу.

{% include nav.html %}
