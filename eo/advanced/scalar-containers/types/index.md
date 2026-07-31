---
title: Datentipoj kaj skalaraj ujoj
---

{% include menu.html %}

Ni rigardu programon, kiu reuzas la saman variablon por teni malsamajn specojn de datumoj. Ni uzas `dd` por vidi, kion la ujo enhavas en ĉiu paŝo. Ĉi tiu ekzemplo estas ĉi tie por demonstraj celoj kaj ne estas rekomendita programstilo.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Ĉiu voko de `dd` montras, kion la variablo `$value` nuntempe enhavas:

```
$value = Any
$value = 42
$value = "forty-two"
```

Komence, la variablo estas malplena, kaj `dd` raportas ĝian valoron kiel `Any` — la nedefinita baza valoro, kun kiu netipigita ujo komenciĝas. Post la asignoj, `dd` montras la entjeron kaj poste la ĉenon.

Rimarku, ke `dd` ne presas tipon antaŭ la nomo ĉi tie. Netipigita ujo ne ligas sin al iu tipo, do nur la valoro estas montrata. Kiel vi vidos en la sekva temo, [ujo kun deklarita tipo](/eo/advanced/scalar-containers/type-constraints) kondutas malsame.

{% include nav.html %}
