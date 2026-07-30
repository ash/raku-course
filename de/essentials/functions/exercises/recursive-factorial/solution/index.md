---
title: 'Solution: Rekursive Fakultät'
---

{% include menu.html %}

Die Berechnung der Fakultät ist eine sehr produktive Übung, da sie auf verschiedene Arten gelöst werden kann. Diesmal verwenden wir Rekursion, was bedeutet, dass die Funktion sich selbst aufruft.

## Code 1

Hier ist der Code der Lösung. Beachten Sie, dass Sie die Bedingung überprüfen müssen, um die Rekursion zu stoppen, andernfalls wird sie unendlich fortgesetzt.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Finden Sie das Programm in der Datei [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Code 2

In den Fällen, wie in diesem Code gezeigt, ist es oft besser, die Postfix-Formen von `if` zu verwenden, um sofort aus der Funktion zurückzukehren. Dieser Ansatz klärt den Code und entfernt viel Einrückung und Interpunktion.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Finden Sie das aktualisierte Programm in der Datei [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Beispiel

Führen Sie das Programm aus und überprüfen Sie das Ergebnis. Übrigens, wussten Sie, dass _10!_ genau die Anzahl der Sekunden in sechs Wochen ist?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}