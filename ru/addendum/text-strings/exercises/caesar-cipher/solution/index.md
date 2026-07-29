---
title: 'Решение: Шифр Цезаря'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Исходный код можно найти в файле [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Вывод

```
KHOOR
```

## Комментарии

1. Оператор транслитерации `tr///` сопоставляет символы первого набора со вторым по позициям.
`A..Z` выстраивается напротив `D..ZA..C`, поэтому `A` становится `D`, `B` — `E`, а хвост `X Y Z`
заворачивается обратно в `A B C`.

1. `tr///` изменяет строку на месте, поэтому после сопоставления сам `$text` содержит зашифрованное
слово.

{% include nav.html %}
