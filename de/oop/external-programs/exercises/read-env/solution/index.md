---
title: 'Lösung: Geben Sie eine Variable an ein Kind weiter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Du findest den Quellcode in der Datei [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Ausgabe

```
3
```

## Kommentare

1. `spurt` legt `notes.txt` mit drei Zeilen an. `%*ENV<NOTES>` auf ihren Namen zu setzen legt den Dateinamen in die Umgebung, die jedes Kindprogramm erbt.

1. Der `shell`-Befehl erbt diese Umgebung, ersetzt `$NOTES` durch `notes.txt` und reicht die Datei an `wc -l` weiter, das ihre Zeilen zählt. Die Umleitung `< "$NOTES"` beschränkt die Ausgabe auf die bloße Zahl `3`, die wir mit `:out` auffangen und trimmen.

1. Das Aufräumen geschieht schließlich wieder in Raku mit `unlink` — keine Shell nötig. Eine Datei zu löschen ist eine schlichte Dateisystemoperation, es gibt also keinen Grund, dafür einen weiteren Prozess zu starten.

{% include nav.html %}
