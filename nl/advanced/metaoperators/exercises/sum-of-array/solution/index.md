---
title: 'Solution: Gemiddelde van een array'
translations_gpt: De oplossing van 'Gemiddelde van een array'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Je kunt de broncode vinden in het bestand [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Uitvoer

```
25
```

## Opmerkingen

1. De reductie-meta-operator `[+]` plaatst de `+`-operator tussen alle elementen van `@data`, dus `[+] @data` is gelijkwaardig aan `10 + 20 + 30 + 40`, dat wil zeggen `100`. De haakjes zijn nodig zodat de reductie plaatsvindt voor de deling.

1. Door de som te delen door `@data.elems`, het aantal elementen, krijg je het gemiddelde `25`. Als het resultaat niet netjes deelbaar was geweest, zou Raku een exact `Rat`-getal hebben geproduceerd in plaats van af te ronden.

{% include nav.html %}
