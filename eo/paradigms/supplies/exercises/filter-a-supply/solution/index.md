---
title: 'Solvo: Filtru supply'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out;
```

🦋 Vi povas trovi la fontkodon en la dosiero [filter-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/filter-a-supply.raku).

## Eligo

```
[2 4 6]
```

## Komentoj

1. `grep(* %% 2)` produktas novan supply, kiu transdonas nur la parajn valorojn, ĝuste kiel `grep` filtras liston.

1. La konekto kolektas tiujn valorojn en `@out`, donante `[2 4 6]`.

{% include nav.html %}
