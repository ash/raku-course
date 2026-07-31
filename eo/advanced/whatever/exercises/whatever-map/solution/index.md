---
title: 'Solvo: Whatever kun map'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Vi povas trovi la fontkodon en la dosiero [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Eligo

```
(3 6 9 12)
```

## Komentoj

1. `* * 3` estas Whatever-esprimo kiu fariĝas unu-argumenta `WhateverCode` — tute ordinara funkcia valoro konservita en `$triple`.

1. Ĉar ĝi estas simple funkcio, `map` akceptas ĝin kiel ajnan blokon, aplikante ĝin al ĉiu elemento de `1..4` por doni `(3 6 9 12)`.

{% include nav.html %}
