---
title: 'Solution: Nach Typ abgleichen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Du findest den Quellcode in der Datei [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Ausgabe

```
rational
```

## Kommentare

1. Wenn der zu matchende Wert ein Typ ist, prüft der Smart Match, ob das Thema *von diesem Typ ist*. `3.14` ist kein `Int`, daher wird das erste `when` übersprungen.

1. Ein Dezimalliteral wie `3.14` ist in Raku ein `Rat` (eine rationale Zahl), daher passt das zweite `when` und das Programm gibt `rational` aus.

{% include nav.html %}
