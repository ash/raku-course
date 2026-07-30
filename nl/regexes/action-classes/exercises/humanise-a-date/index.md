---
title: Oefening ’Maak een datum leesbaar‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Schrijf een grammatica die een ISO-datum als `'2026-07-05'` ontleedt in drie tokens: `year`, `month` en `day`. Schrijf een **actieklasse** waarin elke tokenmethode een waarde `make`-t: `year` en `day` maken hun getal als geheel getal, terwijl `month` de **Engelse maandnaam** maakt (`1` → `January`, …, `12` → `December`). De methode `TOP` leest die drie waarden daarna met `.made` en maakt een goed leesbare string als `'5 July 2026'`. Ontleed `'2026-07-05'` met de actieklasse en druk `.made` af.

## Voorbeeld

Het programma drukt af:

```
5 July 2026
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
