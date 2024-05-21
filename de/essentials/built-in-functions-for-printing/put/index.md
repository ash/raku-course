---
title: Die put-Routine
---

{% include menu.html %}

Standardmäßig führt die `put`-Routine dieselbe Aufgabe wie [`print`](../print) aus, fügt jedoch am Ende eine neue Zeile hinzu:

1. Konvertiert ihre Argumente in einen String, indem sie die `Str`-Methode aufruft.
1. Fügt ein neues Zeilenzeichen hinzu.
1. Sendet es an den `STDOUT`-Stream.

Einige Beispiele:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

Die Ausgaben des Programms:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## Eine neue Zeile von `put`

Die tatsächlichen Zeichen, die nach der Ausgabe hinzugefügt werden, stammen aus der `nl-out`-Methode des Ausgabestreams. Der Standardwert ist `\n`.
%%/tipblock

{% include nav.html %}