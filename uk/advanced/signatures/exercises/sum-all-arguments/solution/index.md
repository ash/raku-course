---
title: 'Розв''язання: Просумуйте всі аргументи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Вихідний код можна знайти у файлі [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Вивід

```
15
```

## Коментарі

1. Всеїдний параметр `*@nums` збирає всі аргументи в масив `@nums`, скільки б їх не було.

1. Далі метаоператор згортки `[+]` додає їх усі разом, даючи `15`.

{% include nav.html %}
