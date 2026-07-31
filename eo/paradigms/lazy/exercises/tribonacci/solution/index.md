---
title: 'Solvo: La sekvenco de Tribonacci'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @trib = 1, 1, 1, * + * + * ... *;
say @trib[^8];
```

🦋 Vi povas trovi la fontkodon en la dosiero [tribonacci.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/tribonacci.raku).

## Eligo

```
(1 1 1 3 5 9 17 31)
```

## Komentoj

1. La fermaĵo `* + * + *` adicias la tri antaŭajn elementojn por produkti la sekvan, do tri komencaj valoroj estas bezonataj.

1. La sekvenco estas maldiligenta, do konservi ĝin en `@trib` kaj peti `@trib[^8]` kalkulas nur la unuajn ok nombrojn.

{% include nav.html %}
