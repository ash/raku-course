---
title: 'Risinājums: Uzkrājējs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Atrodiet programmu failā [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Izvade

```
15
```

## Komentāri

1. Slēgums satver `$sum`, kas izdzīvo starp izsaukumiem.

1. `acc(10)` padara summu par `10`; `acc(5)` pieskaita piecus un atgriež `15`.

{% include nav.html %}
