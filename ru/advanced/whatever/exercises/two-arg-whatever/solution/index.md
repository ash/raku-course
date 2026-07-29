---
title: 'Решение: Whatever с двумя аргументами'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Исходный код можно найти в файле [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Вывод

```
a-b
```

## Комментарии

1. Выражение содержит две звёздочки, поэтому Raku создаёт `WhateverCode`, принимающий два аргумента — первая звёздочка соответствует первому аргументу, вторая — второму.

1. Вызов `$join('a', 'b')` подставляет значения вместо звёздочек по порядку, давая `'a' ~ '-' ~ 'b'`, что равно `a-b`.

{% include nav.html %}
