---
title: Oefening ’Melden en herstellen‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Laat zien hoe `CATCH` een programma laat herstellen en met een zinnige standaardwaarde verder laat gaan.

Declareer vóór een blok een variabele `$timeout` met de standaardwaarde `30`. Doe binnen het blok `die 'config missing'` en probeer daarna (op een regel die nooit bereikt zal worden) `$timeout` op `60` te zetten. Gebruik een `CATCH`-faser waarvan het `default`-blok `warning: <message>; keeping default` afdrukt. Druk na het blok `timeout is <timeout> seconds` af.

## Voorbeeld

Het programma drukt af:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
