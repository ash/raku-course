---
title: Na elke stap
translations_gpt: Oefening 'Na elke stap'
---

{% include menu.html %}

## Probleem

De `NEXT`-phaser wordt aan het *einde* van elke lusiteratie uitgevoerd, wat een goed moment is om voortgang te rapporteren.

Houd een lopend totaal bij in `$sum`, beginnend bij `0`. Doorloop `1..3`; voeg bij elke doorgang eerst het huidige getal toe aan `$sum`. Gebruik een `NEXT`-phaser om `sum so far: $sum` na elke iteratie af te drukken.

Let op de volgorde: de `NEXT`-phaser wordt na de body uitgevoerd, dus het rapporteert het totaal *inclusief* het huidige getal.

## Voorbeeld

Het programma drukt af:

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
