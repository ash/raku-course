---
title: Oefening ’Tel een kanaal op‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Maak een kanaal en drijf het met **twee promises** aan. Verstuur in het ene `start`-blok — de producent — de getallen `1..6` het kanaal in en sluit het daarna. Verzamel in een tweede `start`-blok — de consument — elke waarde met `.list` en geef hun som terug. **Wacht beide** promises samen af, en druk de som af die de consument opleverde. Dit is de natuurlijke vorm van een kanaal: een producent op de ene thread, een consument op de andere, gecoördineerd vanaf een derde.

## Voorbeeld

Het programma drukt af:

```
21
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
