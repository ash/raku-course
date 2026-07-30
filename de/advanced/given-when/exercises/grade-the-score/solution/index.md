---
title: 'Solution: Lebensphase nach Alter'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Du findest den Quellcode in der Datei [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Ausgabe

```
adult
```

## Kommentare

1. Diese Lösung mischt zwei Arten von `when`. Das erste ist eine *Bedingung*, `$_ < 0` (wobei `$_` das durch `given` gesetzte Thema ist), die ungültige Alter aussortiert; die übrigen sind *Bereiche*, die die gültigen Alter in Lebensphasen einteilen.

1. Die Reihenfolge ist wichtig. Die Prüfung auf negatives Alter steht zuerst, damit sie vor jeder Bereichsprüfung ausgeführt wird. Der Wert `30` liegt im Bereich `20..64`, daher gibt das Programm `adult` aus.

1. Der `default`-Block deckt jedes Alter ab 65 ab, das von keinem der aufgelisteten Bereiche erfasst wird.

Du könntest das auch umdrehen und `default` den *ungültigen* Input abfangen lassen. Liste jede anerkannte Lebensphase auf -- einschließlich `senior` als Bedingung `$_ >= 65` -- und behandle alles Übrige (wie ein negatives Alter) als ungültig:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Hier ist `default` ein echtes "Nichts davon zutreffend"-Zweig. Welche Version besser lesbar ist, ist Geschmackssache: Stelle die Prüfung voran, wenn der ungültige Fall die Ausnahme ist, oder mache ihn zum Fallback, wenn die gültigen Phasen alle klar aufgelistet sind.

{% include nav.html %}
