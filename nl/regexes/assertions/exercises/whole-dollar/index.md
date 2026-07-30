---
title: Oefening ’Een bedrag in hele dollars‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Combineer een lookbehind en een lookahead om een bedrag in **hele dollars** te matchen: de cijfers die vlak achter een `$` komen en **niet** door een decimale punt gevolgd worden. Dus `$50` matcht (`50`), maar `$3.99` niet — dat heeft centen.

Gebruik een positieve lookbehind voor `$` en een negatieve lookahead voor `.`, en voeg achter de cijfers een woordgrens `>>` toe zodat het hele getal gematcht wordt. Druk de match voor `'$50'` af.

## Voorbeeld

Het programma drukt af:

```
｢50｣
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
