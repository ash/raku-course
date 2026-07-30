---
title: Übung ’Weicher Kehrwert‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Schreiben Sie eine Subroutine `reciprocal`, die `1` geteilt durch ihr Argument liefert, aber `fail` mit der Meldung `no reciprocal of zero` verwendet, wenn das Argument `0` ist.

Geben Sie das Ergebnis von `reciprocal(4)` aus. Geben Sie dann das Ergebnis von `reciprocal(0)` aus, verwenden Sie dafür aber den Operator `//`, um bei einem Fehlschlag auf die Zeichenkette `undefined` auszuweichen, statt selbst `.defined` zu prüfen.

## Beispiel

Das Programm gibt aus:

```
0.25
undefined
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
