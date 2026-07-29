---
title: Розв'язання вправи «Шифр Цезаря»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
```

🦋 Знайдіть програму у файлі [caesar-cipher.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/caesar-cipher.raku).

## Вивід

```
KHOOR
```

## Коментарі

1. Оператор транслітерації `tr///` відображає символи з першого набору на другий,
позиція за позицією. `A..Z` вишиковується проти `D..ZA..C`, тож `A` стає `D`,
`B` стає `E`, а хвіст `X Y Z` загортається назад до `A B C`.

1. `tr///` змінює рядок на місці, тож `$text` після зіставлення сам містить
зашифроване слово.

{% include nav.html %}
