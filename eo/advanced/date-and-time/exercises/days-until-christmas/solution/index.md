---
title: 'Solvo: Semajnoj ĝis Kristnasko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Vi povas trovi la fontkodon en la dosiero [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Eligo

```
25 weeks and 6 days
```

## Komentoj

1. Subtrahi unu `Date` de alia redonas la nombron de tagoj inter ili — ĉi tie `181` — do neniu mana kalkulado de la tagoj en ĉiu monato necesas. La pli malfrua dato estas skribita unue, do la rezulto estas pozitiva.

1. Entjera divido `div` donas la entjeran nombron de semajnoj (`181 div 7` estas `25`), kaj la modula operatoro `%` donas la restantajn tagojn (`181 % 7` estas `6`).

{% include nav.html %}
