---
title: 'Solution: Wochen bis Weihnachten'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Du findest den Quellcode in der Datei [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Ausgabe

```
25 weeks and 6 days
```

## Kommentare

1. Die Subtraktion eines `Date` von einem anderen gibt die Anzahl der Tage zwischen ihnen zurück -- hier `181` -- sodass kein manuelles Zaehlen der Tage in jedem Monat noetig ist. Das spätere Datum wird zuerst geschrieben, damit das Ergebnis positiv ist.

1. Die ganzzahlige Division `div` ergibt die volle Anzahl der Wochen (`181 div 7` ist `25`), und der Modulo-Operator `%` gibt die verbleibenden Tage (`181 % 7` ist `6`).

{% include nav.html %}
