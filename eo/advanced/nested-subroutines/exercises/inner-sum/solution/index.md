---
title: 'Solvo: Interna sumo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub compute {
    sub add($x, $y) {
        $x + $y;
    }

    add(2, 3) + add(4, 5);
}

say compute;
```

🦋 Vi povas trovi la fontkodon en la dosiero [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Eligo

```
14
```

## Komentoj

1. La nestita `add` estas uzata dufoje ene de `compute`: `add(2, 3)` estas `5` kaj `add(4, 5)` estas `9`.

1. Ilia sumo, `14`, estas la valoro redonata de `compute`.

{% include nav.html %}
