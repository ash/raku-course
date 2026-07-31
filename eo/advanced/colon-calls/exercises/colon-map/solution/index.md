---
title: 'Solvo: Dupunkta map'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 Vi povas trovi la fontkodon en la dosiero [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Eligo

```
(12 14 16 18 20)
```

## Komentoj

1. Nur `grep`, la lasta voko en la cheno, povas uzi la dupunktan formon. La dupunkto faras `* > 10` ghia argumento, ekzakte kiel `grep(* > 10)` farus. Char ni ankorau bezonas presi la rezultojn, `say` estas nun uzata kiel funkcio, ne kiel metodo.

1. La `map`-voko devas konservi siajn krampojn. Se vi skribus `.map: * * 2` anstatau, la dupunkto englutus `.grep(* > 10)` kiel parton de la argumentoj de `map`, kaj la cheno rompighus.

{% include nav.html %}
