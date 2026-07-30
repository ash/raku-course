---
title: 'Lösung: Schreiben mit einem Handle'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Du findest den Quellcode in der Datei [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Ausgabe

```
1
2
3
```

## Kommentare

1. `open` mit dem Schalter `:w` liefert einen Handle zum Schreiben. Der Handle bleibt über die Schleife hinweg offen, jedes `$fh.say` fügt also eine weitere Zeile hinzu — das ist der Vorteil eines Handles gegenüber `spurt`, das die Datei jedes Mal neu öffnen würde.

1. `close` schreibt die Daten auf die Platte, das folgende `slurp` liest also alle drei Zeilen zurück.

{% include nav.html %}
