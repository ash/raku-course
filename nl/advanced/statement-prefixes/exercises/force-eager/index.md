---
title: Gretige evaluatie afdwingen
translations_gpt:
---

{% include menu.html %}

## Opgave

Het prefix `eager` doet het tegenovergestelde van `lazy`: het dwingt een lijst af om volledig te worden geproduceerd, zodat deze niet langer lazy is. Laat het contrast zien met `.is-lazy`.

Print of de oneindige range `1 .. Inf` lazy is, vervolgens of `eager 1..3` lazy is, en tot slot of `lazy 1..3` lazy is. De resultaten moeten `True`, `False`, `True` zijn.

## Voorbeeld

Het programma print:

```
True
False
True
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
