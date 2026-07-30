---
title: 'Solution: Boolesche Tabellen'
---

{% include menu.html %}

Hier ist ein mögliches Programm, das alle Ergebnisse von booleschen Operationen ausgibt.

## Code

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 Du findest den vollständigen Code in der Datei [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/tables.raku).

## Ausgabe

Führe das Programm aus, und es gibt die folgende Tabelle aus.

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Kommentare

Beachte, dass aufgrund der höheren Priorität der booleschen Operationen keine Klammern erforderlich sind. Dies ist jedoch nicht der Fall, wenn du Zeichenkettenverkettung verwendest:

```raku
say 'True && True is ' ~ (True && True);
```

Alternativ kannst du [Code-Interpolation](/de/essentials/strings/code-interpolation) verwenden.

{% include nav.html %}