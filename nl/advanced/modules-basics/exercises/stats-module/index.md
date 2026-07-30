---
title: Een statistiekmodule gebruiken
translations_gpt: Oefening 'Gebruik een statistiekmodule'
---

{% include menu.html %}

## Opgave

Je krijgt een module `Stats.rakumod` die twee subroutines exporteert — `total` en `mean` — waarbij `mean` is gebouwd bovenop `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Schrijf een apart programma dat deze module gebruikt en, voor de lijst `10, 20, 30, 40`, zowel het totaal als het gemiddelde afdrukt.

## Voorbeeld

Uitgevoerd met de module op het zoekpad, drukt het programma af:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
