---
title: 'Solvo: Komenci unue'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Vi povas trovi la fontkodon en la dosiero [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Eligo

```
5
```

## Komentoj

1. `BEGIN { 2 + 3 }` ruliĝas dum kompilado kaj donas `5`. Uzata kiel esprimo, `BEGIN`-bloko redonas sian valoron, kiu estas asignita al `$compiled`.

1. La kalkulo okazas nur unufoje, dum kompilotempo; dum rultempo `$compiled` simple enhavas la konstantan `5`. Tiel `BEGIN` estas uzata por antaŭkalkuli valorojn, ne nur por presi frue.

{% include nav.html %}
