---
title: Begin eerst
translations_gpt:
---

{% include menu.html %}

## Probleem

Een `BEGIN`-phaser is meer dan een blok dat vroeg wordt uitgevoerd — het is ook een *expressie* waarvan de waarde eenmaal wordt berekend, tijdens de compilatie, en vervolgens in het programma wordt vastgelegd.

Gebruik `BEGIN { 2 + 3 }` om een variabele `$compiled` te initialiseren en druk deze af. De `2 + 3` wordt geëvalueerd terwijl het programma nog wordt gecompileerd, maar de opgeslagen waarde is perfect bruikbaar tijdens de uitvoering.

## Voorbeeld

Het programma drukt af:

```
5
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
