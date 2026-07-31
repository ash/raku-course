---
title: 'Solvo: Kiom da ciferoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (2 ** 1000).chars;
```

🦋 Vi povas trovi la fontkodon en la dosiero [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Eligo

```
302
```

## Komentoj

1. `2 ** 1000` estas komputita ekzakte: Raku ne rondas ĝin nek superfluigas, ĉar entjeroj havas arbitran precizecon.

1. `chars` estas normale ĉen-metodo, sed voki ĝin sur entjero unue konvertas la nombron al ĝia dekuma teksto kaj poste kalkulas la signojn. Ĉar ĉi tie estas nek minussigno nek dekuma punkto, tiu signo-kvanto estas ekzakte la nombro da ciferoj — `302`.

{% include nav.html %}
