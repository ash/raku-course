---
title: 'Lösung: Zerlegen Sie einen Dateinamen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Du findest den Quellcode in der Datei [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Ausgabe

```
report
txt
```

## Kommentare

1. Das erste Klammerpaar capturt den Grundnamen in `$0`, das zweite capturt die Erweiterung in `$1`. Der Punkt dazwischen steht in Anführungszeichen, damit er einen wörtlichen `.` trifft und nicht ein beliebiges Zeichen.

1. Das `~` vor jedem Capture setzt es in einen Zeichenketten-Zusammenhang, es wird also als blanker Text ausgegeben. Ein schlichtes `say $0` würde stattdessen das Match-Objekt mit seinen Eckklammern zeigen, `｢report｣`. `say $0.Str` zu schreiben tut dasselbe wie `say ~$0`.

{% include nav.html %}
