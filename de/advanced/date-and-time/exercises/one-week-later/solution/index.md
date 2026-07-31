---
title: 'Solution: Eine Woche später'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Du findest den Quellcode in der Datei [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Ausgabe

```
2027-03-07
7
```

## Kommentare

1. `later(:days(7))` verschiebt das Datum um sieben Tage nach vorne — eine Woche. Wir hätten auch `+ 7` schreiben können, aber das benannte Argument gibt die Einheit explizit an.

1. Der Februar 2027 hat 28 Tage, daher wechselt eine Woche nach dem 28. automatisch in den Maerz: Das Ergebnis ist `2027-03-07`.

1. Der Aufruf von `day-of-week` auf dem neuen Datum ergibt `7`. Das macht das Ergebnis leicht überprüfbar: Ein Datum genau eine Woche später muss auf den *gleichen* Wochentag fallen wie das ursprüngliche, und `2027-02-28` ist ebenfalls ein Sonntag (`7`) — daher ist eine `7` hier das erwartete Ergebnis.

{% include nav.html %}
