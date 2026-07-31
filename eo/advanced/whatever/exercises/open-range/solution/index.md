---
title: 'Solvo: Malfermita intervalo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (2, 4 ... *).head(4);
```

🦋 Vi povas trovi la fontkodon en la dosiero [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Eligo

```
(2 4 6 8)
```

## Komentoj

1. La semoj `2, 4` starigas aritmetikan paŝon de du, kaj la nuda `*` kiel la finpunkto signifas ke la sekvenco neniam finiĝas.

1. `head(4)` prenas nur la unuajn kvar valorojn, `2, 4, 6, 8`. La sekvenco estas maldiligenta, do la senlima vosto neniam estas kalkulita — la nuda stelo ĉi tie signifas "kion ajn, sen supra limo".

{% include nav.html %}
