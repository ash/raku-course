---
title: Een heredoc
translations_gpt:
---

{% include menu.html %}

## Opgave

Gebruik een *interpolerende* heredoc om een orderbevestigingsbrief op te bouwen uit een paar variabelen — een klant `$name`, een `$item`, een stuksprijs `$price` en een `$count`. De heredoc moet de variabelen interpoleren *en* het totaal inline berekenen met een ingebed `{ ... }`-blok (`$count * $price`).

Spring de inhoud van de heredoc in zodat deze aansluit bij de omringende code, en lijn het afsluitende afsluitwoord uit met de tekst zodat de inspringging niet in de uitvoer verschijnt. Druk het resultaat af.

## Voorbeeld

Voor `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25` en `$count = 3` drukt het programma het volgende af, zonder voorloopspaties:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
