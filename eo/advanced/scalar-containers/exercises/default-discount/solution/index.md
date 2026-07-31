---
title: 'Solvo: Defaŭlta rabato'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Vi povas trovi la fontkodon en la dosiero [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Kompreneble, pli simpla solvo estus rekte pravalorizi la variablon per `0`:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Eligo

```
0
15
```

## Komentoj

1. La trajto `is default(0)` donas al la ujo valoron, al kiu ĝi retiriĝas dum nenio estas atribuita al ĝi. Legi la variablon redonas `0`, kaj, malsame ol nedeklarita defaŭlto, ĝi produktas neniun averton pri _nepravalorizita valoro_.

1. Post la atribuo la ujo enhavas `15`, kaj la defaŭlto ne plu ludas iun rolon.

{% include nav.html %}
