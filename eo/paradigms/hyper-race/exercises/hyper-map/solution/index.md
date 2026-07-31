---
title: 'Solvo: map per hyper'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Vi povas trovi la fontkodon en la dosiero [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Eligo

```
APPLE BANANA CHERRY
```

## Komentoj

1. `.hyper` plenumas la tutan ĉenon — la `map`, kiu majuskligas, kaj la `grep`, kiu filtras laŭ longo — trans fadenoj, paralele.

1. Ĉar `.hyper` konservas la ordon, la postrestantaj vortoj restas en sia originala sinsekvo, do `.join(' ')` produktas `APPLE BANANA CHERRY`. `pear`, kun nur kvar literoj, estas forĵetita.

{% include nav.html %}
