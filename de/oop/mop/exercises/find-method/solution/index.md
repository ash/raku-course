---
title: 'Lösung: Finden Sie eine Methode'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Animal {
    method speak { 'generic' }
}

class Dog is Animal {
}

say so Dog.^find_method('speak');
```

🦋 Du findest den Quellcode in der Datei [find-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/find-method.raku).

## Ausgabe

```
True
```

## Kommentare

1. `.^find_method` liefert die Methode, wenn sie existiert, und andernfalls einen undefinierten Wert. Das `so` macht daraus einen schlichten Wahrheitswert.

1. `Dog` definiert selbst keine Methoden, und dennoch ist das Ergebnis `True`: `find_method` durchsucht die gesamte Vererbungskette und findet `speak` oben in `Animal`. Das entspricht genau dem, wie ein tatsächlicher Methodenaufruf auf einem `Dog` die geerbte Methode finden würde.

{% include nav.html %}
