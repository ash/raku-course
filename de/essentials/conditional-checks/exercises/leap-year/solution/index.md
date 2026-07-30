---
title: 'Solution: Schaltjahr'
---

{% include menu.html %}

## Haftungsausschluss

Die unten gezeigte Lösung soll Ihnen helfen, bedingte Überprüfungen zu trainieren. Im wirklichen Leben können Sie die Methoden der eingebauten `Date`-Klasse lernen. Wir werden dies im zweiten Teil des Kurses lernen.

## Lösung

Der Algorithmus zur Erkennung, ob ein Jahr ein Schaltjahr ist:

1. Wenn das Jahr nicht durch 4 teilbar ist => Gemeinjahr
1. Wenn das Jahr nicht durch 100 teilbar ist => Schaltjahr
1. Wenn das Jahr nicht durch 400 teilbar ist => Gemeinjahr
1. Andernfalls => Schaltjahr

Beachten Sie, dass Sie die eingebauten Typen für die Arbeit mit Datum und Uhrzeit verwenden können, daher werden wir in der zweiten Hälfte des Kurses zu dieser Aufgabe zurückkehren.

## Code 1

Die erste Lösung reproduziert die obigen Schritte wörtlich:

```raku
my $year = prompt 'Jahr: ';

if $year % 4 {
    say 'Gemeinjahr';
}
elsif $year % 100 {
    say 'Schaltjahr';
}
elsif $year % 400 {
    say 'Gemeinjahr';
}
else {
    say 'Schaltjahr';
}
```

🦋 Finden Sie das Programm in der Datei [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Code 2

In der zweiten Lösung ist die Logik in einem einzigen Ausdruck verpackt. Klammern sind nicht immer erforderlich, wurden hier jedoch zur Klarheit hinzugefügt.

```raku
my $year = prompt 'Jahr: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Schaltjahr' !! 'Gemeinjahr';
```

🦋 Finden Sie das Programm in der Datei [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Ausgabe

Versuchen Sie beide Programme mit den kritischsten Fällen, zum Beispiel 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Jahr: 1900
Gemeinjahr

$ raku exercises/conditional-checks/leap-year.raku
Jahr: 2000
Schaltjahr
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Jahr: 2020
Schaltjahr

$ raku exercises/conditional-checks/leap-year-formula.raku
Jahr: 2021
Gemeinjahr
```

%%tipblock
## `%%` vs `%`

Beachten Sie, dass in booleschen Kontexten die Operatoren `%%` und `%` komplementär sind. Sie können diese Tatsache nutzen, um einen der Operatoren auszuwählen, um einen expliziten Vergleich mit Null zu vermeiden.

```raku
say ?(100 % 3);    # Wahr
say 100 % 3 != 0;  # Wahr

say ?(100 %% 3);   # Falsch
say 100 %% 3 != 0; # Falsch
```
%%/tipblock

{% include nav.html %}