---
title: Ampeln
---

{% include menu.html %}

## Aufgabe

Definiere ein Enum `Light` mit den Konstanten `red`, `amber` und `green` (in dieser Reihenfolge). Deklariere eine Variable mit dem Enum-Typ, `my Light $current`, und setze sie auf `red`. Gib die Ampelfarbe zusammen mit der dahinterliegenden Zahl aus, in der Form `red is 0`.

Dann **wechsle die Ampel ein paar Mal** — weise `$current` nacheinander `amber` und dann `green` zu, und gib sie nach jeder Änderung auf die gleiche Weise aus — sodass du den Weg `red` → `amber` → `green` gehst.

Du könntest erwarten, dass `$current++` von selbst zur nächsten Farbe wechselt — probiere es aus und schau, was passiert.

## Beispiel

Das Programm gibt aus:

```
red is 0
amber is 1
green is 2
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
