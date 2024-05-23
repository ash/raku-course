---
title: Interpolating arrays
---

{% include menu.html %}

Ad interpolare elementa array in chordis duplicatis-quoted scribe sicut in ipso programmate: `@data[1]`. Ad interpolare totum array, adde paria vacua bracket: `@data[]`. Sequens programma hunc modum illustrat:

```raku
my @data = 10, 20, 30;

say "Primus: @data[0], ultimus: @data[1]";
say "Omnes elementa: @data[]";
```

Hoc programma data postulata imprimit:

```console
$ raku t.raku 
Primus: 10, ultimus: 20
Omnes elementa: 10 20 30
```

{% include nav.html %}