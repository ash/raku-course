---
title: 'Lösung: Temperaturumrechnung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Du findest den Quellcode in der Datei [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Ausgabe

```
212
```

## Kommentare

1. Die Methode arbeitet mit dem eigenen Attribut `degrees` des Objekts, die Formel braucht also kein übergebenes Argument.

1. Für `100` Grad Celsius ist das Ergebnis `212` Grad Fahrenheit.

{% include nav.html %}
