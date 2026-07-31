---
title: 'Solutio: Genus nomina'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Cat {
}

class Dog {
}

my $felix = Cat.new;

say $felix.WHAT;
say $felix.WHAT === Cat.WHAT;
say $felix.WHAT === Dog.WHAT;
```

🦋 Inveni codicem fontem in archivo [name-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/classes/name-the-type.raku).

## Exitus

```
(Cat)
True
False
```

## Commentarii

1. `WHAT` obiectum generis reddit, in parenthesibus ut `(Cat)` ostensum — `$felix` est `Cat`.

1. `===` duo obiecta generis de identitate comparat. `$felix.WHAT === Cat.WHAT` est `True` quia Felix revera `Cat` est, dum `$felix.WHAT === Dog.WHAT` est `False` — `Cat` et `Dog` diversa genera sunt, itaque obiecta generis eorum eadem non sunt.

{% include nav.html %}
