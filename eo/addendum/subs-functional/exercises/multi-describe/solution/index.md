---
title: 'Solvo: Priskribi laŭ tipo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Vi povas trovi la fontkodon en la dosiero [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Eligo

```
integer 42
string hi
list of 3
```

## Komentoj

1. Ĉiu `multi` donas unu version de `describe` kun malsama parametra tipo.
Raku elektas la kongruan kandidaton laŭ la tipo de la argumento.

1. La signaturo `@x` kongruas kun listo, do la tabelo disdividiĝas al la tria
kandidato, kiu raportas sian longon.

{% include nav.html %}
