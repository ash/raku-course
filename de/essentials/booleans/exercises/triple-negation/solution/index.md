---
title: Lösung für 'Dreifache Negation'
---

{% include menu.html %}

Das im Task gezeigte Programm lässt sich nicht kompilieren und erfordert eine kleine Korrektur. Hier ist die korrekte und funktionierende Variante (Leerzeichen hinzugefügt, um `!` und `!!` zu trennen):

## Code

```raku
my $value = False;
say ! !!$value;
```

🦋 Du kannst den vollständigen Code in der Datei [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/triple-negation.raku) finden.

## Ausgabe

Das Programm gibt einen invertierten Booleschen Wert aus, wie du wahrscheinlich erwartet hast:

```console
$ raku triple-negation.raku
True
```

## Kommentare

Es war etwas unerwartet, dass das Programm mit drei Ausrufezeichen nicht kompiliert:

```console
$ raku triple-negation.raku
===SORRY!=== Fehler beim Kompilieren von /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Zwei Begriffe in Folge
bei /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    erwartet wurde einer der folgenden:
        Infix
        Infix-Stoppzeichen
        Postfix
        Anweisungsende
        Anweisungsmodifikator
        Anweisungsmodifikatorschleife
```

Ein zusätzliches Leerzeichen löst dieses Problem. Aber falle nicht in eine andere Falle. Betrachte das folgende Programm:

```raku
my $value = False;
say !!! $value;
```

Dieses Programm kompiliert, endet jedoch mit der folgenden Meldung:

```console
$ raku triple-negation.raku
False
    im Block <unit> bei exercises/booleans/triple-negation.raku Zeile 2
```

Dies geschieht, weil `!!!` ein spezieller Operator ist, um einen Teil des Codes als Platzhaltercode zu markieren. Wenn das Programm diesen Punkt erreicht, wird es beendet und gibt die Nachricht aus, die in unserem Fall der aktuelle Wert der Variablen `$value` war. Weitere Details findest du in 📖 [der Dokumentation](https://docs.raku.org/routine/!!!).

{% include nav.html %}