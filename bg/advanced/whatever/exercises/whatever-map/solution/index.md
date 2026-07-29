---
title: 'Solution: Whatever с map'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Можете да намерите пълния код във файла [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Резултат

```
(3 6 9 12)
```

## Коментари

1. `* * 3` е Whatever израз, който се превръща в `WhateverCode` с един аргумент -- напълно обикновена стойност от тип функция, запазена в `$triple`.

1. Тъй като е просто функция, `map` я приема като всеки блок, прилагайки я към всеки елемент от `1..4`, за да даде `(3 6 9 12)`.

{% include nav.html %}
