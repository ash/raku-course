---
title: 'Розв''язання: Try або типове значення'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Вихідний код можна знайти у файлі [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Вивід

```
default
```

## Коментарі

1. Блок `try`, що зазнає невдачі, обчислюється в невизначене значення.

1. Тому оператор «визначене або» `//` повертає свою праву частину, `'default'`, даючи чистий спосіб відновитися із запасним значенням в один рядок.

{% include nav.html %}
