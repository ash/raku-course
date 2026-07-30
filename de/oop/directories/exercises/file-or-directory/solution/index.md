---
title: 'Lösung: Datei oder Verzeichnis?'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Du findest den Quellcode in der Datei [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Ausgabe

```
True
False
```

## Kommentare

1. `.f` prüft auf eine gewöhnliche Datei, liefert für `a.txt` also `True`.

1. `.d` prüft auf ein Verzeichnis. Zu genau demselben Pfad befragt liefert es `False`, denn `a.txt` ist eine Datei und kein Verzeichnis. Die beiden Prüfungen ergänzen einander, und so unterscheidet man eine Datei von einem Verzeichnis.

{% include nav.html %}
