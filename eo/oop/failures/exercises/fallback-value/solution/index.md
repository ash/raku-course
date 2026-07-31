---
title: 'Solvo: Rezerva valoro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Vi povas trovi la fontkodon en la dosiero [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Eligo

```
5
default
```

## Komentoj

1. `get(5)` redonas `5` normale, do `//` konservas ĝin.

1. `get(0)` redonas nedifinitan `Failure`, do `//` retiriĝas al `'default'`. Ĉar `Failure` estas nedifinita, `//` traktas ĝin kviete, sen ĵeti.

{% include nav.html %}
