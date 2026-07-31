---
title: 'Risinājums: Sākt pirmo'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams uzdevuma risinājums.

## Kods

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Šīs programmas pirmkodu var atrast failā [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Izvade

```
5
```

## Komentāri

1. `BEGIN { 2 + 3 }` izpildās kompilācijas laikā un atgriež `5`. Lietots kā izteiksme, `BEGIN` bloks atdod savu vērtību, kas tiek piešķirta mainīgajam `$compiled`.

1. Aprēķins notiek tikai vienu reizi, kompilācijas laikā; izpildes laikā `$compiled` vienkārši satur konstanti `5`. Tieši tā `BEGIN` tiek izmantots, lai iepriekš aprēķinātu vērtības, ne tikai lai kaut ko izdrukātu agri.

{% include nav.html %}
