---
title: 'Solution: Whatever с два аргумента'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Можете да намерите пълния код във файла [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Резултат

```
a-b
```

## Коментари

1. Изразът съдържа две звезди, така че Raku създава `WhateverCode`, който приема два аргумента — първата звезда е първият аргумент, втората звезда е вторият.

1. Извикването на `$join('a', 'b')` попълва звездите по ред, давайки `'a' ~ '-' ~ 'b'`, което е `a-b`.

{% include nav.html %}
