---
title: 'Lösung: Schaltjahre'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Du findest den Quellcode in der Datei [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Ausgabe

```
2000: leap
1900: common
2024: leap
2023: common
```

## Kommentare

1. Die Regel liest sich unmittelbar als boolescher Ausdruck: Ein Schaltjahr ist eines,
das durch 400 teilbar ist, *oder* eines, das durch 4, aber nicht durch 100 teilbar ist.
`%%` ist der Teilbarkeitstest.

1. `1900` ist durch 100, aber nicht durch 400 teilbar, ist also ein Gemeinjahr; `2000`
ist durch 400 teilbar, ist also ein Schaltjahr.

1. Rakus Typ [`Date`](/de/advanced/date-and-time) kennt diese Regel bereits. Er stellt sie
als `.is-leap-year` bereit — eine Methode auf einem *Datumsobjekt*, Sie erzeugen also
irgendein Datum im Jahr (hier den 1. Januar) und fragen es:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    In der Übung geht es natürlich darum, die Regel selbst zu schreiben.

{% include nav.html %}
