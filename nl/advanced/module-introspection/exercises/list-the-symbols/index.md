---
title: De symbolen oplijsten
translations_gpt:
---

{% include menu.html %}

## Opgave

Je hebt een module in een bestand `Circle.rakumod` die twee `our`-variabelen definieert:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Schrijf een programma dat de module gebruikt en eerst afdrukt hoeveel namen er in het pakket van de module gedefinieerd zijn, en vervolgens de namen zelf in alfabetische volgorde.

## Voorbeeld

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
