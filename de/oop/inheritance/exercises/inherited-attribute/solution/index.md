---
title: 'Lösung: Ein geerbtes Attribut'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Vehicle {
    has $.wheels;
}

class Bike is Vehicle {
    has $.wheels = 2;
}

class Car is Vehicle {
    has $.wheels = 4;
}

say Bike.new.wheels;
say Car.new.wheels;
```

🦋 Du findest den Quellcode in der Datei [inherited-attribute.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/inherited-attribute.raku).

## Ausgabe

```
2
4
```

## Kommentare

1. `Bike` und `Car` erben beide das Attribut `wheels` (und seinen Accessor) von `Vehicle`. Keines deklariert das Attribut von Grund auf neu — sie geben dem geerbten lediglich einen Standardwert, `2` beziehungsweise `4`.

1. Weil der Standardwert in jeder Klasse fest eingebaut ist, können Sie die Objekte mit einem schlichten `Bike.new` und `Car.new` erzeugen, und der geerbte Accessor liest die richtige Anzahl Räder zurück.

1. Sie können den Wert weiterhin ausdrücklich übergeben, etwa `Car.new(wheels => 3)`, und ein ausdrückliches Argument überschreibt den Standardwert. Da ein Fahrrad oder ein Auto aber höchstwahrscheinlich schon mit seiner üblichen Anzahl Räder kommt, halten die Standardwerte den Normalfall einfach und lassen zugleich Raum für die gelegentliche Ausnahme.

{% include nav.html %}
