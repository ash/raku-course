---
title: 'Uzdevums: e vērtība'
---

{% include menu.html %}

## Problēma

Izveidojiet funkciju, kas aprēķina matemātiskās konstantes _e_ aptuveno vērtību, izmantojot šādu formulu:

<img src="e-formula.png" style="height: 4.5em; width: auto">

Šai funkcijai jāļauj to izsaukt vienā no šādām formām:

1. Arguments nosaka elementu skaitu formulā: `e-approx(10)`.
2. Ja arguments netiek nodots, summa satur 100 elementus: `e-approx()`.

Izdrukājiet rezultātus abos gadījumos.

## Piemērs

```console
$ raku the-value-of-e.raku
2.7182818
2.718281828459045
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}