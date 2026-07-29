---
title: 'Розв''язання: День тижня'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Вихідний код можна знайти у файлі [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Вивід

```
True
```

## Коментарі

1. `day-of-week` нумерує дні від `1` (понеділок) до `7` (неділя), тож двома вихідними днями є саме числа `6` та `7`.

1. Перевірка `>= 6` дає `True` і для суботи, і для неділі та `False` для будь-якого робочого дня. 14 лютого 2027 року — неділя (`7`), тож програма виводить `True`.

{% include nav.html %}
