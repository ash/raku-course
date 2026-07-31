---
title: 'Solvo: Flua ĉenstacio'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
(1..8)
    ==> grep(* > 3)
    ==> map(* * 2)
    ==> my @result;

say @result;
```

🦋 Vi povas trovi la fontkodon en la dosiero [feed-pipeline.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-pipeline.raku).

## Eligo

```
[8 10 12 14 16]
```

## Komentoj

1. La unua etapo konservas la nombrojn pli grandajn ol `3` (tio estas `4, 5, 6, 7, 8`); la dua duobligas ĉiun el ili.

1. Ĉiu `==>` transdonas sian rezulton al la sekva etapo, kaj la lasta kolektas ĝin en `@result`.

{% include nav.html %}
