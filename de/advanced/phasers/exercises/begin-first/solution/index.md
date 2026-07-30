---
title: 'Solution: Begin zuerst'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Du findest den Quellcode in der Datei [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Ausgabe

```
5
```

## Kommentare

1. `BEGIN { 2 + 3 }` wird während der Kompilierung ausgeführt und ergibt `5`. Als Ausdruck verwendet, gibt ein `BEGIN`-Block seinen Wert zurück, der `$compiled` zugewiesen wird.

1. Die Berechnung findet nur einmal statt, zur Kompilierzeit; zur Laufzeit enthält `$compiled` einfach die Konstante `5`. So wird `BEGIN` verwendet, um Werte vorab zu berechnen, und nicht nur, um früh etwas auszugeben.

{% include nav.html %}
