---
title: 'Solvo: La dua plej granda valoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Vi povas trovi la fontkodon en la dosiero [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Eligo

```
7
```

## Komentoj

1. Transformi la liston en `Set` per `.Set` forĵetas la duobligitan `9`, ĉar aro
tenas ĉiun valoron nur unufoje.

1. `.keys` redonas la malsamajn valorojn — ankoraŭ `Int`, ne ĉenoj — do simpla
`.sort` ordigas ilin nombre. La dua plej granda tiam estas unu lokon antaŭ la
fino, `[*-2]`.

{% include nav.html %}
