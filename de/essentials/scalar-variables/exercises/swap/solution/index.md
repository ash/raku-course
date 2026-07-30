---
title: 'Solution: Werte tauschen'
---

{% include menu.html %}

In diesem Programm verwenden wir die Elemente der Raku-Syntax aus dem Abschnitt über [skalare Variablen](/de/essentials/scalar-variables).

## Code

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Du kannst den Quellcode in der Datei [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/swap.raku) finden.

## Ausgabe

Führe das Programm aus und bestätige, dass es die Werte in unterschiedlicher Reihenfolge ausgibt.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Kommentare

Alle Schritte dieses Programms (Erstellen einer Variablen und Zuweisen der Werte, Tauschen der Werte und Ausgeben) verwenden beide Variablen in derselben Konstruktion. Am interessantesten ist hier die Art und Weise, wie die Variablen ihre Werte austauschen:

```raku
($a, $b) = $b, $a;
```

Beachte, dass du Klammern auf der linken Seite benötigst, aber du kannst sie auch auf der rechten Seite hinzufügen:

```raku
($a, $b) = ($b, $a);
```

Was passiert, wenn du die Klammern weglässt?

```raku
$a, $b = $b, $a;
```

In diesem Fall erhältst du eine Warnung, dass `$a` auf der rechten Seite nicht verwendet wird:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

Die obige Zeile ist tatsächlich gleichbedeutend mit einer nutzlosen Zuweisung `$b = $b`. Du kannst es leicht sehen, wenn du die Werte auf der rechten Seite änderst, zum Beispiel:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Dieses Programm gibt noch mehr Warnungen aus, aber du kannst auch sehen, dass sich nur `$b` geändert hat:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}