---
title: Een dubbele-punt-map
---

{% include menu.html %}

## Opgave

Hier is een expressie die de getallen `1` tot `10` verdubbelt en vervolgens alleen de getallen groter dan `10` behoudt:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Herschrijf het zodat de `grep`-methode-aanroep de dubbele-puntvorm gebruikt in plaats van haakjes. Laat de rest van de keten ongewijzigd. Onthoud dat de dubbele-puntvorm de rest van de instructie consumeert, dus alleen de laatste aanroep in een keten mag deze gebruiken.

## Voorbeeld

Het programma drukt af:

```
(12 14 16 18 20)
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
