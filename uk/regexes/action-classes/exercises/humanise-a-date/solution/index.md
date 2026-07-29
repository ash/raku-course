---
title: Розв'язання вправи «Дата по-людськи»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Знайдіть програму у файлі [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Вивід

```
5 July 2026
```

## Коментарі

1. На відміну від простої арифметичної дії, методи токенів створюють значення **різних видів**: `year` та `day` створюють цілі числа, а `month` створює *рядок*, використовуючи своє числове значення як індекс у списку назв місяців. `$/ - 1` перетворює двоцифровий збіг на число (`07` → `7`) і зсуває його до індексу від нуля, тож місяць `07` створює `July`.

1. Метод `TOP` жодного разу не переглядає сирий текст. Він лише читає три значення, які вже створили підметоди, — `$<day>.made`, `$<month>.made`, `$<year>.made` — і вставляє їх у підсумковий рядок. Читання `5` назад із `day` заразом задарма прибирає ведучий нуль.

1. Це щоденна робота класу дій: один раз розібрати структурований вхідний текст, а далі дати кожному методу перетворити свій шматок на те, що потрібно решті програми.

{% include nav.html %}
