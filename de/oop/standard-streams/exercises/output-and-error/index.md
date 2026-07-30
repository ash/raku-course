---
title: Übung ’Ausgabe und Fehler‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Ein Programm summiert die Liste der Zahlen `3, 5, 7` in einer Schleife. Schicken Sie bei jedem Durchgang den aktuellen Zwischenstand als Fortschrittsmeldung an die Standardfehlerausgabe und nach der Schleife das Endergebnis an die Standardausgabe, und verwenden Sie dafür die Handles der Ströme direkt.

Diese Trennung ist wichtig: Das Ergebnis lässt sich auffangen oder weiterleiten, während die Fortschrittsmeldungen auf der Standardfehlerausgabe nicht im Weg sind.

## Beispiel

Beim Ausführen erscheinen beide Ströme am Bildschirm — die Zwischenstände, dann das Endergebnis:

```
running total: 3
running total: 8
running total: 15
15
```

Verwerfen Sie aber die Standardfehlerausgabe, bleibt nur das eigentliche Ergebnis:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
