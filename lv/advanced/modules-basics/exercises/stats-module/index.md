---
title: Statistikas modulis
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Jums ir dots modulis `Stats.rakumod`, kas eksportē divas apakšprogrammas — `total` un `mean` —, kur `mean` ir uzbūvēta uz `total` pamata:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Uzrakstiet atsevišķu programmu, kas izmanto šo moduli un sarakstam `10, 20, 30, 40` izdrukā gan kopsummu, gan vidējo vērtību.

## Piemērs

Palaista ar moduli uz meklēšanas ceļa, programma izdrukā:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
