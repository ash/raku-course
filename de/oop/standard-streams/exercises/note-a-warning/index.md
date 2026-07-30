---
title: Übung ’Vermerken Sie eine Warnung‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Ein Programm verarbeitet einen Wert, der sich als negativ herausstellt. Verwenden Sie `note`, um eine Warnung an die Standardfehlerausgabe zu schicken, wenn der Wert kleiner als null ist, und `say`, um das eigentliche Ergebnis — seinen Betrag — an die Standardausgabe zu schicken. Verwenden Sie den Wert `-3`.

## Beispiel

Beide Zeilen erscheinen am Bildschirm:

```
Warning: the value is negative
3
```

Wird die Standardfehlerausgabe verworfen, bleibt nur das Ergebnis:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
