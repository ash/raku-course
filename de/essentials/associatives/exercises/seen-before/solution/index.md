---
title: 'Lösung: Schon gesehen?'
---

{% include menu.html %}

Diese Aufgabe ist ein klassisches Beispiel für die Verwendung eines Hashes, um Elemente zu verfolgen. Vor einer Schleife wird ein Hash `%seen` erstellt. Innerhalb der Schleife dient das eingegebene `$word` als Schlüssel des Hashes.

## Code

Hier ist die Lösung:

```raku
my %seen;
loop {
    my $word = prompt 'Wort: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Gesehen!' !! say "Schon %seen{$word} Mal gesehen!";
    }
    %seen{$word}++;
}
```

🦋 Finde das Programm in der Datei [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Ausgabe

```console
$ raku exercises/associatives/seen-before.raku
Wort: Ich
Wort: habe
Wort: noch
Wort: nie
Wort: eine
Wort: Säge
Wort: gesehen
Wort: Säge
Gesehen!
Wort: die
Wort: Säge
Schon 2 Mal gesehen!
Wahr
Wort: so
Wort: wie
Wort: die
Gesehen!
Wort: Säge
Schon 3 Mal gesehen!
Wahr
Wort: gesägt
Wort: ^C
```

## Kommentar

Der Konstrukt `%seen{$word}++` erhöht nicht nur den Wert, sondern erstellt ihn auch, wenn er noch nicht existiert. Der Prozess des Erstellens wird _Autovivifikation_ genannt. Beachten Sie, dass dies nicht passiert, wenn Sie den Wert nur _lesen_, wie in der Bedingung: `if %seen{$word}`.

{% include nav.html %}