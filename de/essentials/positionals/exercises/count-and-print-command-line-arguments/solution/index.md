---
title: 'Solution: Befehlszeilenargumente zählen und drucken'
---

{% include menu.html %}

In diesem Programm ist eine `for`-Schleife eine gute Wahl.

## Code

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Finde das Programm in der Datei [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/count-and-print-arguments.raku).

## Ausgabe

Führe das Programm aus und bestätige, dass es die Argumente und Zeilennummern druckt:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Diskussion

Dieses Programm verwendet ein paar nützliche Tricks. Zuerst geht die `for`-Schleife entlang des [Bereichs, der mit `^` konstruiert wurde](/de/essentials/ranges/excluding-endpoints). Der Bereich beginnt also bei 0 und geht bis (aber nicht einschließlich) zum Wert von `@*ARGS`. In diesem Kontext [gibt er die Länge des Arrays zurück](/de/essentials/positionals/arrays#size).

Da das erste Element eines Arrays den Index `0` hat und die Aufgabe verlangt, dass wir die Zeilen ab `1` zählen, wird diese einfache Verschiebung [innerhalb eines Codeblocks](/de/essentials/strings/code-interpolation) in einem String berechnet: `"{$n + 1} ..."`.

{% include nav.html %}