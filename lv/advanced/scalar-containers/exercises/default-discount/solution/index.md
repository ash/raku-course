---
title: 'Risinājums: Noklusējuma atlaide'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Atrodiet programmu failā [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Protams, vienkāršāks risinājums būtu mainīgo uzreiz inicializēt ar `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Izvade

```
0
15
```

## Komentāri

1. Iezīme `is default(0)` dod konteineram vērtību, pie kuras atkāpties, kamēr tam nekas nav piešķirts. Mainīgā nolasīšana atgriež `0`, un — atšķirībā no nedeklarēta noklusējuma — tā nerada brīdinājumu par _neinicializētu vērtību_.

1. Pēc piešķiršanas konteiners satur `15`, un noklusējumam vairs nav nekādas nozīmes.

{% include nav.html %}
