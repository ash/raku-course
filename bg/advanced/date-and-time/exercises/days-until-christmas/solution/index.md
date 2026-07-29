---
title: 'Solution: Седмици до Коледа'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Можете да намерите пълния код във файла [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Резултат

```
25 weeks and 6 days
```

## Коментари

1. Изваждането на една `Date` от друга връща броя дни между тях — тук `181` — така че не е необходимо ръчно броене на дните във всеки месец. По-късната дата е написана първа, за да е резултатът положителен.

1. Целочисленото деление `div` дава целия брой седмици (`181 div 7` е `25`), а операторът за остатък `%` дава оставащите дни (`181 % 7` е `6`).

{% include nav.html %}
