---
title: 'Solution: Eine Person begrüßen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung für die Aufgabe.

## Code

```raku
my $name = prompt 'Wie heißt du? ';
say 'Hallo, ', $name, '!';
```

🦋 Du kannst den Quellcode in der Datei [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/greet-a-person.raku) finden.

## Ausgabe

Führe das Programm aus und gib einen Namen ein, wenn du dazu aufgefordert wirst:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
Wie heißt du? Inge
Hallo, Inge!
```

## Kommentare

1. Dieses Programm verwendet eine skalare Variable `$name`, um eine Zeichenkette zu speichern, die vom Benutzer als Antwort auf die Eingabeaufforderung eingegeben wurde. Wenn die Variable in der Liste verwendet wird, die du der `say`-Routine übergibst, erhältst du den Namen in einer Nachricht.

1. Es gibt eine bessere Möglichkeit, dieses Problem mit Zeichenketteninterpolation zu lösen. Lassen Sie uns in Kürze zu diesem Problem zurückkehren.

{% include nav.html %}