---
title: Розв'язання вправи «Малі літери»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Знайдіть програму у файлі [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Вивід

```
raku
```

## Коментарі

1. `tr///` відображає кожен символ першого діапазону на символ, що стоїть на тій самій позиції у другому.

1. Тут діапазони йдуть від великих літер до малих, тож кожна велика літера замінюється своєю малою парою — у напрямку, протилежному до переведення у верхній регістр.

{% include nav.html %}
