---
title: Die Notizroutine
---

{% include menu.html %}

Die `note`-Routine druckt ihre Argumente in den Standardfehlerstrom. Im Übrigen ist sie ähnlich wie [`say`](../say).

1. Ruft die `gist`-Methode auf ihren Argumenten auf.
1. Fügt ein Zeilenumbruchzeichen hinzu.
1. Konvertiert das Ergebnis in UTF-8.
1. Sendet es an den `STDERR`-Strom.

```raku
my $x = 42;
note "Der aktuelle Wert von \$x ist $x";
```

Bestätigen Sie, dass dieses Programm die Nachricht nicht an `STDOUT` sendet:

```
$ raku t.raku > /dev/null
Der aktuelle Wert von $x ist 42
```

Wenn kein Argument an `note` übergeben wird, druckt es `Noted` als Standardnachricht.

{% include nav.html %}