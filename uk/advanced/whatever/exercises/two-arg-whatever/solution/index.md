---
title: 'Розв''язання: Whatever із двома аргументами'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Вихідний код можна знайти у файлі [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Вивід

```
a-b
```

## Коментарі

1. Вираз містить дві зірочки, тож Raku будує `WhateverCode`, який приймає два аргументи: перша зірочка — це перший аргумент, друга — другий.

1. Виклик `$join('a', 'b')` заповнює зірочки по порядку, даючи `'a' ~ '-' ~ 'b'`, тобто `a-b`.

{% include nav.html %}
