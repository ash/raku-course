---
title: 'Решение: Whatever с map'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Исходный код можно найти в файле [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Вывод

```
(3 6 9 12)
```

## Комментарии

1. `* * 3` — это выражение Whatever, которое становится `WhateverCode` с одним аргументом — совершенно обычным значением-функцией, сохранённым в `$triple`.

1. Поскольку это просто функция, `map` принимает её так же, как любой блок, применяя к каждому элементу `1..4` и получая `(3 6 9 12)`.

{% include nav.html %}
