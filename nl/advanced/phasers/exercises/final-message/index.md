---
title: Laatste bericht
translations_gpt:
---

{% include menu.html %}

## Probleem

Een `END`-phaser wordt uitgevoerd na de hoofdcode, dus hij ziet de *uiteindelijke* toestand van je variabelen — waardoor hij ideaal is voor een samenvatting.

Declareer een teller `$count` met waarde `0`, en schrijf een `END`-phaser (plaats deze vóór de hoofdcode) die `processed $count items` afdrukt. Verhoog vervolgens in de hoofdcode de teller drie keer met een lus. De samenvatting moet het eindresultaat weergeven, niet de waarde op het moment dat de phaser werd geschreven.

## Voorbeeld

Het programma drukt af:

```
processed 3 items
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
