---
title: 'Solution: Klassentische'
---

{% include menu.html %}

Die Lösung für das Problem wird unten gezeigt.

## Code

```raku
my $students = 23;

my $desks = $students div 2 + $students % 2;

say "$desks desks must be bought.";
```

🦋 Du kannst den vollständigen Code in der Datei [class-desks.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/class-desks.raku) finden.

## Ausgabe

Führe das Programm mindestens zweimal aus und probiere sowohl ungerade als auch gerade Schülerzahlen. Zum Beispiel, für die Eingabezahlen `23` und `24`, gibt das Programm dasselbe Ergebnis aus:

```console
$ raku exercises/numbers/class-desks.raku
12 desks must be bought.
```

## Kommentare

Es reicht nicht aus, nur die Anzahl der Schüler durch zwei zu teilen. Es ist wichtig, sowohl ungerade als auch gerade Zahlen zu berücksichtigen. Eine mögliche Lösung, um die Zahl aufzurunden, ist: `$students div 2 + $students % 2`. Wenn die Anzahl der Schüler gerade ist, ist die zweite Komponente null, und das Ergebnis entspricht der Hälfte der Schülerzahl. Aber wenn die Anzahl der Schüler ungerade ist, bleibt die erste Komponente aufgrund von `div` anstelle von `/` eine ganze Zahl, und der zweite Term des Ausdrucks fügt einen zusätzlichen Schreibtisch hinzu.

{% include nav.html %}