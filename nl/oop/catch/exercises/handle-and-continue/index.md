---
title: Oefening ’Afhandelen en doorgaan‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Loop over de drie items `ok`, `bad` en `ok`. Draai voor elk daarvan een blok dat `processed <item>` afdrukt, maar `die 'boom'` doet wanneer het item `bad` is. Zet een `CATCH`-faser binnen het blok zodat een mislukkend item gemeld wordt als `skipped (<item>): <message>` en de lus doorgaat naar het volgende item in plaats van te stoppen.

## Voorbeeld

Het programma drukt af:

```
processed ok
skipped (bad): boom
processed ok
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
