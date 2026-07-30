---
title: 'Lösung: Ein Datum mit benannten Captures zerlegen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $date = '2026-07-03';

if $date ~~ / $<year>=(\d ** 4) '-' $<month>=(\d\d) '-' $<day>=(\d\d) / {
    say "year: $<year>, month: $<month>, day: $<day>";
}
```

🦋 Du findest den Quellcode in der Datei [parse-date.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/parse-date.raku).

## Ausgabe

```
year: 2026, month: 07, day: 03
```

## Kommentare

1. `$<year>=( ... )` gibt einem Capture einen Namen. Nach einem gelungenen Treffer halten
`$<year>`, `$<month>` und `$<day>` die gecapturten Stücke.

1. `\d ** 4` bedeutet genau vier Ziffern, das Muster trifft also nur ein richtig geformtes
Datum.

{% include nav.html %}
