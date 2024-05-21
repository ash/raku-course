---
title: Lösung für 'Hallo, Interpolation!'
---

{% include menu.html %}

## Code

Hier ist eine mögliche Lösung für dieses Problem:

```raku
my $name = prompt 'Wie heißt du? ';
say "Hallo, $name!";
```

🦋 Du findest den Quellcode in der Datei [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Ausgabe

Führe das Programm aus, und es wird in einen Modus wechseln, in dem es auf deine Eingabe wartet. Nachdem du den Namen eingegeben und Enter gedrückt hast, fährt das Programm fort und gibt die Begrüßung aus:

```console
$ raku exercises/strings/hello-concatenation.raku
Wie heißt du? Raku
Hallo, Raku!
```

## Kommentare

Beachte, dass diesmal der String in doppelte Anführungszeichen gesetzt ist. In doppelten Anführungszeichen werden Variablen interpoliert, sodass ihr Inhalt in den String eingefügt wird.

{% include nav.html %}