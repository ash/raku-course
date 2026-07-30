---
title: Nach jedem Schritt
---

{% include menu.html %}

## Problem

Der `NEXT`-Phaser wird am *Ende* jeder Schleifeniteration ausgeführt, was ein guter Zeitpunkt ist, um den Fortschritt zu melden.

Halte eine laufende Summe in `$sum` vor, beginnend bei `0`. Iteriere über `1..3`; füge bei jedem Durchlauf zuerst die aktuelle Zahl zu `$sum` hinzu. Verwende einen `NEXT`-Phaser, um `sum so far: $sum` nach jeder Iteration auszugeben.

Beachte die Reihenfolge: Der `NEXT`-Phaser wird nach dem Rumpf ausgeführt, sodass er die Summe *einschließlich* der aktuellen Zahl meldet.

## Beispiel

Das Programm gibt aus:

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
