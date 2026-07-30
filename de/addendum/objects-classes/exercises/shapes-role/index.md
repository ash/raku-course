---
title: Übung ’Formen mit gemeinsamer Rolle‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Bestimmen Sie eine Rolle `Shape`, die eine Methode `area` verlangt, und bauen Sie dann
Klassen `Circle` und `Square`, welche die Rolle erfüllen.

Schreiben Sie eine Subroutine `describe`, deren Parameter als `Shape` *typisiert* ist,
sodass sie jede Form annimmt und alles ablehnt, was keine ist. Sie soll die Fläche der
Form ausgeben, beschriftet mit ihrem Klassennamen. Rufen Sie sie für einen Kreis mit
Radius `2` und ein Quadrat mit Seite `3` auf.

Die Subroutine prüft nie, welche Art von Form sie bekommen hat: Weil ihr Parameter eine
`Shape` ist, hat das Objekt mit Sicherheit eine Methode `area`, derselbe `.area`-Aufruf
wirkt also auf jeder Form, die hereinkommt. Das ist es, was Ihnen die Rolle gibt — ein
einziger Typ, den Sie verlangen können, und ein Stück Code, das jede Klasse, die ihn
erfüllt, gleich behandelt.

## Beispiel

Das Programm gibt aus:

```
Circle: 12.56636
Square: 9
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
