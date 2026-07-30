---
title: 'Solution: Wochentag'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Du findest den Quellcode in der Datei [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Ausgabe

```
True
```

## Kommentare

1. `day-of-week` nummeriert die Tage von `1` (Montag) bis `7` (Sonntag), sodass die beiden Wochenendtage genau die Nummern `6` und `7` sind.

1. Der Test `>= 6` ergibt `True` für Samstag und Sonntag und `False` für jeden Wochentag. Der 14. Februar 2027 ist ein Sonntag (`7`), daher gibt das Programm `True` aus.

{% include nav.html %}
