---
title: 'Solvo: Tago de la semajno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Vi povas trovi la fontkodon en la dosiero [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Eligo

```
True
```

## Komentoj

1. `day-of-week` numeras la tagojn de `1` (lundo) ĝis `7` (dimanĉo), do la du semajnfinaj tagoj estas ĝuste la nombroj `6` kaj `7`.

1. La testo `>= 6` estas `True` por kaj sabato kaj dimanĉo, kaj `False` por ĉiu labortago. La 14-a de februaro 2027 estas dimanĉo (`7`), do la programo presas `True`.

{% include nav.html %}
