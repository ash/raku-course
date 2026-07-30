---
title: Twee functies in één module
translations_gpt: Oefening 'Twee functies in één module'
---

{% include menu.html %}

## Opgave

Maak een module genaamd `Calc`, in een bestand `Calc.rakumod`, die twee subroutines exporteert: `add` en `mul`, die de som en het product van hun twee argumenten teruggeven.

Schrijf vervolgens een apart programma dat de module gebruikt om `add(3, 4)` en `mul(3, 4)` af te drukken, elk op een eigen regel.

## Voorbeeld

Uitgevoerd met de module op het zoekpad, drukt het programma af:

```console
$ raku -I. calc.raku
7
12
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
