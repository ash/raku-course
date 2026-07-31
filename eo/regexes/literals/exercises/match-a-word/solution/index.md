---
title: 'Solvo: Trovu frazon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'I love Raku' ~~ / 'love Raku' /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [match-a-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/match-a-word.raku).

## Eligo

```
｢love Raku｣
```

## Komentoj

1. La spaco inter la vortoj estas signifa ĉi tie, do la frazo estas envolvita en citilojn: `'love Raku'`. Sen la citiloj, la regulesprima motoro ignorus la spacon kaj serĉus `loveRaku`, kio ne estas en la ĉeno.

1. La sagaca kongruigo redonas kongruan objekton, kiu kovras la tutan cititan frazon, kiun `say` presas inter angulaj krampoj.

{% include nav.html %}
