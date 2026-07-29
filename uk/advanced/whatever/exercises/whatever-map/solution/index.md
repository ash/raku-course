---
title: 'Розв''язання: Whatever із map'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Вихідний код можна знайти у файлі [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Вивід

```
(3 6 9 12)
```

## Коментарі

1. `* * 3` — це вираз Whatever, який стає `WhateverCode` з одним аргументом, тобто цілком звичайним функційним значенням, збереженим у `$triple`.

1. Оскільки це просто функція, `map` приймає її як будь-який блок і застосовує до кожного елемента `1..4`, даючи `(3 6 9 12)`.

{% include nav.html %}
