---
title: Sammeln bis voll
---

{% include menu.html %}

## Problem

Durchlaufe einen großzügigen Zahlenbereich von `1` bis `100` und nimm die Zahlen auf — aber höre auf, sobald ihre laufende Summe `10` überschreiten würde. Gib die Liste der gesammelten Zahlen aus.

Das ist etwas, was `grep` nicht kann, weil du die Schleife mittendrin abbrechen musst. Mit `gather` und `take` geht das: Verwende `last`, um die Schleife in dem Moment zu verlassen, in dem das Limit erreicht ist, egal wie viele Zahlen noch übrig sind.

## Beispiel

Das Programm gibt aus:

```
[1 2 3 4]
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
