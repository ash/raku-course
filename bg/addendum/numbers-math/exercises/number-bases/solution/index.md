---
title: 'Решение: Едно число в три бройни системи'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Намерете програмата във файла [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Изход

```
11111111
377
FF
```

## Коментари

1. Методът `.base` представя цялото число в коя да е основа от 2 до 36, връщайки
низ. `255` е `11111111` в двоична и `FF` в шестнадесетична система — най-голямата
стойност, която се побира в един байт.

{% include nav.html %}
