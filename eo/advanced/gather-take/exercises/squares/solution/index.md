---
title: 'Solvo: Kvadratoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Vi povas trovi la fontkodon en la dosiero [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Eligo

```
[4 16 36]
```

## Komentoj

1. La kondiĉo `if $_ %% 2` decidas, *ĉu* preni, kaj `$_ ** 2` decidas, *kion* preni. Nur la paraj nombroj `2`, `4`, `6` trapasas la kondiĉon.

1. Iliaj kvadratoj `4`, `16`, `36` estas la solaj valoroj transdonitaj al `take`, do `gather` kolektas ĝuste tiujn. Fari la filtradon kaj la transformadon kune en unu `take` estas io, kion simpla `map` ne povas esprimi same nete.

{% include nav.html %}
