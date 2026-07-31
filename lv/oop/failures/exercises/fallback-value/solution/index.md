---
title: 'Risinājums: Rezerves vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Atrodiet programmu failā [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Izvade

```
5
default
```

## Komentāri

1. `get(5)` parastā kārtā atgriež `5`, tāpēc `//` to patur.

1. `get(0)` atgriež nedefinētu `Failure`, tāpēc `//` atkāpjas uz `'default'`. Tā kā `Failure` ir nedefinēts, `//` to apstrādā klusi, neizmetot izņēmumu.

{% include nav.html %}
