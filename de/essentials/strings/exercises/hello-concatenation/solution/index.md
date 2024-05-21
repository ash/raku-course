---
title: Lösung zu 'Hallo, Verkettung!'
---

{% include menu.html %}

## Code

Hier ist eine mögliche Lösung für dieses Problem:

```raku
my $name = prompt 'Wie heißt du? ';
say 'Hallo, ' ~ $name ~ '!';
```

🦋 Du findest den Quellcode in der Datei [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-concatenation.raku).

## Ausgabe

Führe das Programm aus, und es wird in einen Modus wechseln, in dem es auf deine Eingabe wartet. Nachdem du den Namen eingegeben und Enter gedrückt hast, fährt das Programm fort und druckt die Begrüßung:

```console
$ raku exercises/strings/hello-concatenation.raku
Wie heißt du? John
Hallo, John!
```

## Kommentare

Vergleiche das Programm mit [der vorherigen Variante](../../../../scalar-variables/exercises/greet-a-person/solution), bei der wir drei Zeichenketten an die `say`-Routine übergeben haben:

```raku
say 'Hallo, ', $name, '!';
```

Dieses Mal werden die drei Teile zuerst verkettet und dann als einzelne Zeichenkette an `say` übergeben.

{% include nav.html %}