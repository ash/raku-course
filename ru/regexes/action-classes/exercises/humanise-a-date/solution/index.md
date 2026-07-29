---
title: 'Решение: Сделайте дату человекочитаемой'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Вывод

```
5 July 2026
```

## Комментарии

1. В отличие от простого арифметического действия, методы токенов делают значения **разного
рода**: `year` и `day` делают целые числа, а `month` делает *строку*, используя своё числовое
значение как индекс в списке названий месяцев. Выражение `$/ - 1` приводит двузначное совпадение
к числу (`07` → `7`) и сдвигает к индексу, считаемому с нуля, поэтому месяц `07` делает `July`.

1. Метод `TOP` вообще не заглядывает в сырой текст. Он просто читает три значения, уже сделанные
вложенными методами, — `$<day>.made`, `$<month>.made`, `$<year>.made` — и подставляет их в итоговую
строку. Чтение `5` обратно из `day` заодно бесплатно убирает ведущий ноль.

1. В этом и состоит повседневная работа класса действий: один раз разобрать структурированный
ввод, а затем позволить каждому методу превратить свой кусочек в то, что нужно остальной
программе.

{% include nav.html %}
