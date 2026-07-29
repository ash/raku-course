---
title: Розв'язання вправи «Усі числа»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Знайдіть програму у файлі [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Вивід

```
5+10+15
```

## Коментарі

1. `\d+` зіставляється з цілою послідовністю цифр, а `:g` збирає кожну таку послідовність — тут це `5`, `10` та `15`.

1. Кожен збіг є об'єктом збігу, тож `.map(*.Str)` перетворює їх на звичайні рядки, перш ніж з'єднати знаками `+`.

{% include nav.html %}
