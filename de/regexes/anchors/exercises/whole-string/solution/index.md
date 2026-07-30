---
title: 'Lösung: Die ganze Zeichenkette'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so 'hello' ~~ /^ <[a..z]>+ $/;
```

🦋 Du findest den Quellcode in der Datei [whole-string.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-string.raku).

## Ausgabe

```
True
```

## Kommentare

1. Die Anker `^` und `$` heften das Muster an den Anfang und das Ende der Zeichenkette.

1. Dazwischen muss `<[a..z]>+` jedes Zeichen abdecken, eine Zeichenkette mit einem Großbuchstaben oder einem Leerzeichen, etwa `Hello there`, würde also scheitern.

{% include nav.html %}
