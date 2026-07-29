---
title: 'Solution: Отстъпка по подразбиране'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Можете да намерите изходния код във файла [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Разбира се, по-просто решение би било директно да инициализирате променливата с `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Изход

```
0
15
```

## Коментари

1. Характеристиката `is default(0)` дава на контейнера стойност, към която да се върне, докато не му е присвоено нищо. Четенето на променливата връща `0` и, за разлика от недекларираната стойност по подразбиране, не произвежда предупреждение за _неинициализирана стойност_.

1. След присвояването контейнерът съдържа `15` и стойността по подразбиране вече не играе никаква роля.

{% include nav.html %}
