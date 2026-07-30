---
title: 'Lösung: Kilometer in Meilen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Du findest den Quellcode in der Datei [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Ausgabe

```
6.21
```

## Kommentare

1. Die Umrechnung hängt von keinem bestimmten Objekt ab, sie ist also als Klassenmethode geschrieben und wird direkt auf `Converter` aufgerufen.

1. Eine Klassenmethode kann dennoch Parameter aufnehmen: Hier erhält sie die Anzahl der Kilometer und liefert die Meilen.

{% include nav.html %}
