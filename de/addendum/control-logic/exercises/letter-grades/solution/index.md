---
title: 'Lösung: Notenbuchstaben'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for 95, 82, 71, 58 -> $score {
    my $grade = do given $score {
        when * >= 90 { 'A' }
        when * >= 80 { 'B' }
        when * >= 70 { 'C' }
        when * >= 60 { 'D' }
        default      { 'F' }
    }

    say "$score -> $grade";
}
```

🦋 Du findest den Quellcode in der Datei [letter-grades.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/letter-grades.raku).

## Ausgabe

```
95 -> A
82 -> B
71 -> C
58 -> F
```

## Kommentare

1. `do given` macht das ganze `given`/`when` zu einem Ausdruck, dessen Wert der treffende
Block ist — hier ein Notenbuchstabe —, der in `$grade` abgelegt wird.

1. Jedes `when * >= N` ist ein Whatever-Vergleich mit dem Thema. Das erste, das gelingt,
gewinnt, jede Grenze braucht also nur eine untere Schranke.

{% include nav.html %}
