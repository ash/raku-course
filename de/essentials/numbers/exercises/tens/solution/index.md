---
title: 'Solution: Anzahl der Zehner'
---

{% include menu.html %}

So können Sie die Aufgabe lösen.

## Code

```raku
my $n = prompt 'Geben Sie eine positive ganze Zahl ein: ';

say ($n % 100) div 10;
```

🦋 Den vollständigen Code finden Sie in der Datei [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/tens.raku).

## Ausgabe

Führen Sie das Programm aus und testen Sie einige verschiedene Fälle:

* Eine dreistellige runde Zahl wie 120;
* Ein Vielfaches von 100, zum Beispiel 400;
* Eine Zahl, die größer als 10, aber kleiner als 100 ist.
* Eine Zahl kleiner als 10.

Für die Zahl 234 sieht die Ausgabe des Programms so aus:

```console
$ raku exercises/numbers/tens.raku
Geben Sie eine positive ganze Zahl ein: 234
3
```

## Kommentare

In dieser Lösung wird erneut die Kombination aus dem Modulo `%` und der Ganzzahldivision `div` verwendet.

Beachten Sie den Abstand vor der öffnenden Klammer. Dieser muss vorhanden sein, sonst erhalten Sie einen Syntaxfehler. Wir werden auf [diesen Aspekt](/de/essentials/more-on-functions/mind-the-space) von Raku im Abschnitt über Funktionen zurückkommen, aber vorerst geben Sie den Code wie oben gezeigt ein oder fügen Sie ein weiteres Paar Klammern hinzu, um das Argument der Funktion zu umschließen — in diesem Fall ist kein Abstand erforderlich:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}