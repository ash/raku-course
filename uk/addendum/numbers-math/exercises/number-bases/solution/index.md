---
title: Розв'язання вправи «Одне число у трьох системах числення»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Знайдіть програму у файлі [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Вивід

```
11111111
377
FF
```

## Коментарі

1. Метод `.base` подає ціле число в будь-якій основі від 2 до 36, повертаючи
рядок. `255` — це `11111111` у двійковій і `FF` у шістнадцятковій системі,
тобто найбільше значення, що вміщається в один байт.

{% include nav.html %}
