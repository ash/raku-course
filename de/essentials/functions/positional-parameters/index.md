---
title: Positionsparameter
---

{% include menu.html %}

Die Reihenfolge der Funktionsparameter ist wichtig. Erstellen Sie zum Beispiel eine Funktion, die die Differenz zwischen zwei Zahlen berechnet:

```raku
sub diff($a, $b) { $a - $b }
```

Es ist offensichtlich, dass sich das Ergebnis des Aufrufs von `diff(10, 20)` von `diff(20, 10)` unterscheidet.

Parameter, die wie in der obigen Funktion als kommagetrennte Liste aufgeführt sind, werden _positionsabhängig_ genannt. Ihre Bedeutung hängt von der Reihenfolge ab, in der die Argumente an die Funktion übergeben werden, wenn sie aufgerufen wird.

{% include nav.html %}