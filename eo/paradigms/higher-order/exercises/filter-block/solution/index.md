---
title: 'Solvo: Filtri per bloko'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Eligo

```
5
```

## Komentoj

1. `grep` prenas la blokon `* > 5` kaj konservas la nombrojn, por kiuj ĝi estas vera: `6, 7, 8, 9, 10`.

1. `.elems` kalkulas ilin, donante `5`.

{% include nav.html %}
