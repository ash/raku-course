---
title: 'Solvo: Multiplikilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub multiplier($factor) {
    -> $x { $x * $factor };
}

my &triple = multiplier(3);
say triple(4);
```

🦋 Vi povas trovi la fontkodon en la dosiero [multiplier.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/multiplier.raku).

## Eligo

```
12
```

## Komentoj

1. La redonita pinta bloko fermiĝas super `$factor`, memorante, ke ĝi estas `3`.

1. Voki ĝin kun `4` donas `12`.

{% include nav.html %}
