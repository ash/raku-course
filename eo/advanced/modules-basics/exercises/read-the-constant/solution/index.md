---
title: 'Solvo: Legi la konstanton'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Eligo

```console
$ raku -I. read-pi.raku
3.14
```

## Komentoj

1. `need Circle` ŝargas la modulon sed ne importas iujn nomojn, do nuda `$pi` ne estus rekonata.

1. La `our`-variablo estas atingata per la nomo de la modulo, skribita kiel `$Circle::pi`.

{% include nav.html %}
