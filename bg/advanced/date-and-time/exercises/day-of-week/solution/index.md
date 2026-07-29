---
title: 'Solution: Ден от седмицата'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Можете да намерите пълния код във файла [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Резултат

```
True
```

## Коментари

1. `day-of-week` номерира дните от `1` (понеделник) до `7` (неделя), така че двата почивни дни са точно числата `6` и `7`.

1. Проверката `>= 6` е `True` както за събота, така и за неделя, и `False` за всеки делничен ден. 14 февруари 2027 г. е неделя (`7`), така че програмата отпечатва `True`.

{% include nav.html %}
