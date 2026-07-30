---
title: 'Lösung: Leeren Sie ein Verzeichnis'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Du findest den Quellcode in der Datei [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Ausgabe

```
False
```

## Kommentare

1. `rmdir` entfernt nur ein leeres Verzeichnis, die Dateien müssen also zuerst weg. `'cache'.IO.dir` listet die Einträge auf, und `.unlink for …` löscht jeden einzelnen.

1. Da das Verzeichnis nun leer ist, entfernt `rmdir` es. Die abschließende `.e`-Prüfung meldet `False` und bestätigt, dass `cache` verschwunden ist.

{% include nav.html %}
