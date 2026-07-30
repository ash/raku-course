---
title: Die Größe klassifizieren
translations_gpt:
---

{% include menu.html %}

## Problem

Schreiben Sie drei Multi-Subroutinen mit dem Namen `size`, die alle ein `Int` entgegennehmen und `'small'`, `'medium'` oder `'large'` zurückgeben. Klassifizieren Sie nach dem *Betrag* der Zahl, unabhängig vom Vorzeichen: Zahlen mit einem Absolutwert unter `10` sind klein, unter `100` sind mittel, und alles andere ist groß. Verwenden Sie eine `where`-Klausel bei den ersten beiden Kandidaten und lassen Sie den dritten als Auffangfall.

Geben Sie das Ergebnis von `size(7)`, `size(30)` und `size(-250)` aus.

## Beispiel

Das Programm gibt aus:

```
small
medium
large
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
