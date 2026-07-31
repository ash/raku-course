---
title: 'Solvo: Fluigu la grandajn nombrojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Vi povas trovi la fontkodon en la dosiero [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Eligo

```
[6 7 8 9 10]
```

## Komentoj

1. La fluo sendas `1..10` en `grep`, kiu konservas la nombrojn pli grandajn ol `5`.

1. La rezulto fluas en `@big`, la celon, kiu finas la fluon.

{% include nav.html %}
