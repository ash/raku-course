---
title: Ein Heredoc
---

{% include menu.html %}

## Problem

Erstelle mit einem *interpolierenden* Heredoc einen Bestellbestätigungsbrief aus einigen Variablen — einem Kundennamen `$name`, einem `$item`, einem Stückpreis `$price` und einer Anzahl `$count`. Das Heredoc soll die Variablen interpolieren *und* die Gesamtsumme inline mit einem eingebetteten `{ … }`-Block (`$count * $price`) berechnen.

Rücke den Rumpf des Heredocs passend zum umgebenden Code ein und richte das schließende Abschlusswort am Text aus, damit die Einrückung nicht in der Ausgabe erscheint. Gib das Ergebnis aus.

## Beispiel

Für `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25` und `$count = 3` gibt das Programm ohne führende Leerzeichen aus:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
