---
title: 'Lösung: Vermerken Sie eine Warnung'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Du findest den Quellcode in der Datei [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Ausgabe

```
Warning: the value is negative
3
```

## Kommentare

1. `note` schickt die Warnung an die Standardfehlerausgabe, und zwar nur, wenn der Wert tatsächlich negativ ist. `say` schickt das eigentliche Ergebnis — den Betrag `3` — an die Standardausgabe.

1. Die Diagnose auf der Standardfehlerausgabe zu belassen bedeutet, dass sie die eigentliche Ausgabe des Programms nicht verschmutzt: Die Standardfehlerausgabe mit `2>/dev/null` zu verwerfen lässt nur die `3` übrig.

{% include nav.html %}
