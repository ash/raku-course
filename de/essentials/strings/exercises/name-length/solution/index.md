---
title: Lösung zu 'Namenslänge'
---

{% include menu.html %}

## Code

Hier ist die Lösung zur Aufgabe:

```raku
my $name = prompt 'Wie heißt du? ';
say $name.chars;
```

🦋 Du findest den Quellcode in der Datei [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/name-length.raku).

## Ausgabe

Führe das Programm aus und gib den Namen ein.

```console
$ raku exercises/strings/name-length.raku 
Wie heißt du? Alexandra
9
```

## Kommentare

In diesem Programm erhalten wir die Länge des Strings, indem wir die Methode `chars` auf der Variable `$name` aufrufen. Da die Variable einen String enthält, gibt die Methode die Länge davon zurück.

{% include nav.html %}