---
title: Abschlussnachricht
---

{% include menu.html %}

## Problem

Ein `END`-Phaser wird nach dem Hauptcode ausgeführt und sieht daher den *endgültigen* Zustand deiner Variablen — was ihn ideal für eine Zusammenfassung macht.

Deklariere einen Zähler `$count` mit dem Wert `0` und schreibe einen `END`-Phaser (platziere ihn vor dem Hauptcode), der `processed $count items` ausgibt. Erhöhe dann im Hauptteil den Zähler dreimal mit einer Schleife. Die Zusammenfassung sollte den endgültigen Wert anzeigen, nicht den Wert zum Zeitpunkt, als der Phaser geschrieben wurde.

## Beispiel

Das Programm gibt aus:

```
processed 3 items
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
