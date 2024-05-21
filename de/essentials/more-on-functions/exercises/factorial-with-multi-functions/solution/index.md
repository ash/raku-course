---
title: 'Lösung: Fakultät mit Multi-Funktionen'
---

{% include menu.html %}

Diese Übung behandelt erneut Fakultäten. Tatsächlich ermöglicht uns die Aufgabe, weitere Funktionen von Raku zu veranschaulichen.

Wenn man eine Fakultät berechnet, indem man von der gegebenen Zahl ausgeht und abwärts zählt, muss man aufhören, wenn die Zahl 1 erreicht. Mit Multi-Funktionen kann man dies erreichen, indem man den Fall mit `$n == 1` in eine separate Multi-Funktion auslagert.

## Code

Hier ist die Lösung:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Finde das Programm in der Datei [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/more-on-functions/factorial-with-multi-functions.raku).

## Ausgabe

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Kommentar

Beachte, dass das Eingabeargument explizit in einen Integer umgewandelt wird: `@*ARGS[0].Int`. Dies soll eine Endlosschleife verhindern, wenn die Eingabezahl `1` ist. In diesem Fall ist der Typ des an die `factorial`-Funktion übergebenen Parameters [`IntStr`](/de/essentials/typed-variables/allomorphs), und die erste Multi-Variante kann den Aufruf nicht abfangen. Im Gegensatz dazu, wenn `factorial(2 - 1)` rekursiv aufgerufen wird, ist das Argument der Funktion ein Integer, was es ermöglicht, die erste Variante aufzurufen.

{% include nav.html %}