---
title: 'Übung: Der Wert von e'
---

{% include menu.html %}

## Problem

Erstellen Sie eine Funktion, die einen ungefähren Wert der mathematischen Konstante _e_ unter Verwendung der folgenden Formel berechnet:

<img src="e-formula.png" style="height: 4.5em; width: auto">

Diese Funktion sollte in einer der folgenden Formen aufgerufen werden können:

1. Das Argument definiert die Anzahl der Elemente in der Formel: `e-approx(10)`.
2. Wenn kein Argument übergeben wird, enthält die Summe 100 Elemente: `e-approx()`.

Geben Sie die Ergebnisse für beide Fälle aus.

## Beispiel

```console
$ raku the-value-of-e.raku
2.7182818
2.718281828459045
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}