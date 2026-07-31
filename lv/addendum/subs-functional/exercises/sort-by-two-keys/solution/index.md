---
title: 'Risinājums: Kārtošana pēc divām atslēgām'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Atrodiet programmu failā [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Izvade

```
Bob (25)
Anna (30)
Cara (30)
```

## Komentāri

1. Kad `.sort` bloks atgriež sarakstu, Raku salīdzina pēc pirmā elementa, tad pēc
otrā, — tāpēc `{ .<age>, .<name> }` vispirms kārto pēc vecuma un vārdu izmanto
tikai vienādu vērtību sašķiršanai.

1. Annai un Carai ir vienāds vecums `30`, tāpēc tās sakārtotas alfabētiski; Bobs,
būdams jaunāks, nāk pirmais.

{% include nav.html %}
