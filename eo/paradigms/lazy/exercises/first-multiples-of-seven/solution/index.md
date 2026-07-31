---
title: 'Solvo: La unuaj obloj de sep'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Vi povas trovi la fontkodon en la dosiero [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Eligo

```
(7 14 21 28 35)
```

## Komentoj

1. `1..*` estas senfina intervalo; `.map(* * 7)` multiplikas ĉiun elementon per sep maldiligente.

1. `.head(5)` tiras nur la unuajn kvin, do la senfina fonto neniam estas plene kalkulata.

{% include nav.html %}
