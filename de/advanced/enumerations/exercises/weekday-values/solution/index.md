---
title: 'Solution: Wochentagsnummern'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Du findest den Quellcode in der Datei [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Ausgabe

```
Fri
Mon
```

## Kommentare

1. Das Schreiben der Konstanten als Paare erlaubt es dir, die Zahlen selbst zu wählen, hier beginnend ab `1`.

1. Der Aufruf des Enum-Typs als `Day(5)` führt eine umgekehrte Suche durch: Er findet die Konstante, deren Wert `5` ist, also `Fri`. Ebenso gibt `Day(1)` den Wert `Mon` zurück. Dies ist das Gegenteil von `Fri.value`, das vom Namen zur Zahl führen würde.

{% include nav.html %}
