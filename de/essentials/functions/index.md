---
title: Erstellen und Aufrufen von Funktionen in Raku
---

{% include menu.html %}

Sie haben den letzten Abschnitt des ersten Teils des Kurses erreicht. Wenn Sie diesen abschließen, werden Sie über das gesamte Wissen verfügen, das erforderlich ist, um praktisch _jedes_ Programm in Raku zu erstellen. Das Thema dieses Abschnitts sind _Funktionen_, oder _Subroutinen_, oder einfach _Routinen_.

Eine Funktion ist ein wiederverwendbarer Teil des Codes mit eigenem Namen. Sie können Funktionen von verschiedenen Stellen im Programm _aufrufen_.

## Erstellen einer Funktion

Um eine Funktion zu erstellen, verwenden Sie das Schlüsselwort `sub` gefolgt vom Namen der Funktion. Der Körper der Funktion ist in ein Paar geschweifte Klammern eingeschlossen.

```raku
sub greet {
    say 'Hallo, Welt!';
}
```

## Verwenden einer Funktion

Um die Funktion zu verwenden, setzen Sie einfach ihren Namen an die Stelle, an der Sie sie aufrufen müssen. In Raku kann die Definition einer Funktion vor oder nach der Stelle stehen, an der die Funktion verwendet wird.

```raku
say 'Dies ist, was das erste Programm normalerweise ausgibt:';
greet;    

sub greet {
    say 'Hallo, Welt!';
}
```

Das Programm gibt beide Nachrichten aus:

```console
$ raku t.raku
Dies ist, was das erste Programm normalerweise ausgibt:
Hallo, Welt!
```

Nun lassen Sie uns andere Details zum Erstellen und Verwenden von Funktionen betrachten.

{% include nav.html %}