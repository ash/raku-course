---
title: 'Risinājums: Masīva vidējais'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Programmas pirmkodu var atrast failā [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Izvade

```
25
```

## Komentāri

1. Redukcijas metaoperators `[+]` ievieto `+` operatoru starp visiem `@data` elementiem, tāpēc `[+] @data` ir ekvivalents `10 + 20 + 30 + 40`, tas ir, `100`. Iekavas ir nepieciešamas, lai redukcija notiktu pirms dalīšanas.

1. Dalot summu ar `@data.elems`, elementu skaitu, iegūstam vidējo vērtību `25`. Ja rezultāts nedalītos precīzi, Raku būtu ražojis precīzu `Rat` vērtību, nevis noapaļojis.

{% include nav.html %}
