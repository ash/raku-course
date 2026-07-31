---
title: 'Solutio: Dies septimanae'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Inveni codicem fontem in archivo [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Exitus

```
True
```

## Commentarii

1. `day-of-week` dies numerat ab `1` (die Lunae) usque ad `7` (die Solis), ergo duo dies feriarum sunt exacte numeri `6` et `7`.

1. Probatio `>= 6` est `True` tam pro die Saturni quam pro die Solis et `False` pro quolibet die operario. Quartus decimus dies Februarii MMXXVII est dies Solis (`7`), ergo programma imprimit `True`.

{% include nav.html %}
