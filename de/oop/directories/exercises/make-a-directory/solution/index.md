---
title: 'Lösung: Legen Sie ein Verzeichnis an'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Du findest den Quellcode in der Datei [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Ausgabe

```
True
True
```

## Kommentare

1. `mkdir` legt das Verzeichnis an, und `.IO.d` bestätigt, dass `reports` ein Verzeichnis ist.

1. Weil das Verzeichnis nun existiert, können wir eine Datei hineinschreiben, indem wir einen Pfad angeben, der den Verzeichnisnamen enthält, `reports/data.txt`. Ein `.e` auf diesem Pfad bestätigt, dass die Datei im neuen Verzeichnis angelegt wurde.

1. Die Reihenfolge ist wichtig: `spurt` legt fehlende Verzeichnisse **nicht** für Sie an. In `reports/data.txt` zu schreiben, bevor das Verzeichnis `reports` existiert, schlägt mit einem Fehler wie `Failed to open file … : No such file or directory` fehl. Erst das Verzeichnis anzulegen — wie `mkdir` es hier tut — lässt das Schreiben gelingen. Praktischerweise legt `mkdir` auch fehlende Zwischenverzeichnisse an, ein verschachtelter Pfad wie `mkdir 'reports/2026'` baut also die ganze Kette in einem einzigen Aufruf.

{% include nav.html %}
