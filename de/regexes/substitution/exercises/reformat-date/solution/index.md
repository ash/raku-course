---
title: 'Lösung: Formatieren Sie ein Datum um'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $d = '2025-06-15';
$d ~~ s/ (\d+) '-' (\d+) '-' (\d+) /$2\/$1\/$0/;
say $d;
```

🦋 Du findest den Quellcode in der Datei [reformat-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/reformat-date.raku).

## Ausgabe

```
15/06/2025
```

## Kommentare

1. Das Muster capturt das Jahr in `$0`, den Monat in `$1` und den Tag in `$2`.

1. Die Ersetzung schreibt sie in der neuen Reihenfolge `$2/$1/$0`, mit den Schrägstrichen als `\/` maskiert. Die Ersatzseite hat keine umgebenden Leerzeichen, denn Leerzeichen würden dort wörtlich eingefügt.

{% include nav.html %}
