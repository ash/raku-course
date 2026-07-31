---
title: 'Risinājums: Ligzdots nosaukums'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma risinājumiem.

## Kods

```raku
module Outer {
    module Inner {
        our $base = 10;
        our sub doubled { $base * 2 }
    }
}

say $Outer::Inner::base;
say Outer::Inner::doubled();
```

🦋 Šīs programmas pirmkodu var atrast failā [nested-name.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/nested-name.raku).

## Izvade

```
10
20
```

## Komentāri

1. Vienas vārdtelpas ievietošana otrā veido garāku `::` ceļu. Gan mainīgais, gan apakšprogramma atrodas divos līmeņos dziļi, vārdtelpā `Outer::Inner`.

1. Pilnais nosaukums `$Outer::Inner::base` sasniedz mainīgo, un `Outer::Inner::doubled()` sasniedz apakšprogrammu caur tiem pašiem diviem līmeņiem. Apakšprogrammas nosaukumam nav sigila, tāpēc atšķirībā no mainīgā tam priekšā nav `$`.

1. Abi elementi ir deklarēti ar `our`, kas padara tos redzamus ārpus to moduļa. Deklarācija ar `my` būtu padarījusi tos privātus modulim `Inner`.

{% include nav.html %}
