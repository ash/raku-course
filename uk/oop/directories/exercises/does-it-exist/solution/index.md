---
title: 'Розв''язання: Чи існує воно?'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Вихідний код можна знайти у файлі [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Вивід

```
False
True
```

## Коментарі

1. `.e` перевіряє, чи шлях існує. Перша перевірка виконується до створення файлу, тож повертає `False`.

1. Далі `spurt` створює `test.txt`, і друга перевірка *того самого* шляху тепер повертає `True`. Повторний запит до об'єкта шляху відображає поточний стан файлової системи.

{% include nav.html %}
