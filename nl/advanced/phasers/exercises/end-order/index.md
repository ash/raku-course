---
title: De volgorde van ENDs
translations_gpt:
---

{% include menu.html %}

## Probleem

Een programma kan meer dan één `END`-phaser hebben. Wanneer dat het geval is, worden ze in **omgekeerde** volgorde uitgevoerd ten opzichte van hoe ze geschreven zijn — de laatst gedeclareerde wordt als eerste uitgevoerd (last in, first out).

Schrijf twee `END`-phasers, de eerste die `first END` afdrukt en de tweede die `second END` afdrukt, gevolgd door een gewone `say 'body'`. Voorspel en reproduceer de uitvoervolgorde.

## Voorbeeld

Het programma drukt af:

```
body
second END
first END
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
