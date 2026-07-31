---
title: 'Solvo: La defaŭlto de la ujo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Vi povas trovi la fontkodon en la dosiero [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Eligo

```
0
0
```

## Komentoj

1. La trajto `is default(0)` donas al la ujo defaultan valoron. Char nenio estis atribuita, legado de `$count` redonas tiun defaulton, do la unua linio presas `0`.

1. `.VAR.default` demandas la ujon mem pri ghia deklarita defaulto, kiu ankau estas `0`. Sen la trajto, netipigita ujo havus defaulton de `(Any)`.

{% include nav.html %}
