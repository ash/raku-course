---
title: Positionele parameters
---

{% include menu.html %}

De volgorde van functieparameters is belangrijk. Maak bijvoorbeeld een functie die het verschil tussen twee getallen berekent:

```raku
sub diff($a, $b) { $a - $b }
```

Het is duidelijk dat het resultaat van het aanroepen van `diff(10, 20)` verschilt van `diff(20, 10)`.

Parameters die als een door komma's gescheiden lijst worden vermeld zoals in de bovenstaande functie, worden _positioneel_ genoemd. Hun betekenis hangt af van de volgorde waarin de argumenten aan de functie worden doorgegeven wanneer deze wordt aangeroepen.

{% include nav.html %}