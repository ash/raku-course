---
title: 'Solution: Monatsnamen'
---

{% include menu.html %}

In diesem Programm werden die Namen der Monate aus dem Array `@months` mit zwölf Zeichenketten entnommen. Da die Array-Indizes bei 0 beginnen, müssen wir die Eingabezahl um 1 verringern, bevor wir das Array subskriptieren.

## Code

Hier ist die Lösung:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Finden Sie das Programm in der Datei [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/months-names.raku).

## Ausgabe

Probieren Sie einige Ausführungen des Programms aus, um verschiedene Monatsnamen zu sehen.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Stil

Es liegt an Ihnen, eine der möglichen Arten zur Formatierung der Listen wie in diesem Programm auszuwählen. Vergleichen Sie einige Optionen:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Oder:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Sie können auch alle Monate in einer einzigen Zeile auflisten.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}