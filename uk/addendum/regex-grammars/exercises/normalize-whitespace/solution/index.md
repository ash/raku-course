---
title: Розв'язання вправи «Унормуйте пробіли»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
```

🦋 Знайдіть програму у файлі [normalize-whitespace.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/normalize-whitespace.raku).

## Вивід

```
too many spaces
```

## Коментарі

1. `.trim` прибирає пробіли на початку й у кінці; підстановка далі замінює кожну
послідовність пробільних символів `\s+` на один пробіл.

1. Прислівник `:g` робить підстановку глобальною, тож стискаються *усі* проміжки,
а не лише перший.

{% include nav.html %}
