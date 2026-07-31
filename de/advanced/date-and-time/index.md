---
title: Datum und Uhrzeit
---

{% include menu.html %}

Raku hat eingebaute Typen zur Arbeit mit Kalenderdaten und Uhrzeiten. Ein Kalenderdatum wird durch den Typ `Date` dargestellt. Du erstellst eines, indem du das Jahr, den Monat und den Tag angibst:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Sobald du ein Datum hast, kannst du seine Bestandteile auslesen:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

Die Methode `day-of-week` gibt zurück, auf welchen Wochentag das Datum fällt, nummeriert von `1` für Montag bis `7` für Sonntag:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

Der 27. Juni 2026 ist ein Samstag, daher ist das Ergebnis `6`.

Die Methode `is-leap-year` gibt an, ob das Datum in einem Schaltjahr liegt:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Um das heutige Datum zu erhalten, rufe `Date.today` auf. Wir zeigen die Ausgabe hier nicht, da sie vom Tag abhängt, an dem du das Programm ausführst.

{% include nav.html %}
