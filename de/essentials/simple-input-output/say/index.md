---
title: Ausgabe mit say
---

{% include menu.html %}

Die `say`-Funktion (oder eine Subroutine, oder einfach Routine) druckt die Werte auf den Standardausgabestream, `STDOUT`. Wenn Sie das Programm von einem Terminal ausführen, erscheint die Ausgabe dort. Wenn Sie Online-Dienste nutzen, wird die Ausgabe in einen speziellen Bereich der Webseite gesendet.

Hier ist ein Beispiel für die Verwendung von `say`:

```raku
say 42;
```

Diese Zeile kann entweder Teil eines größeren Programms sein oder das gesamte Programm selbst. Sie druckt offensichtlich `42` auf die Ausgabe.

Arbeiten wir nun mit Zeichenketten:

```raku
say 'Hello, World!';
```

Voilà, wir haben `Hello, World!` auf dem Bildschirm.

Die `say`-Routine kann mehr als ein Argument akzeptieren, sodass wir mehrere Werte auf einmal drucken können:

```raku
say 42, 'Hello, World!';
```

Beachten Sie nur, dass die Teile dieser Ausgabe zu einer einzigen Zeichenkette zusammengefügt werden: `42Hello, World!`, daher ist es besser, ein Leerzeichen dazwischen zu setzen. Und Sie sollten in der Lage sein, dieses Problem jetzt zu lösen, zum Beispiel so:

```raku
say 42, ' ', 'Hello, World!';
```

Nach dem Drucken aller Argumente fügt die `say`-Routine ein Zeilenumbruchzeichen zur Ausgabe hinzu.

{% include nav.html %}