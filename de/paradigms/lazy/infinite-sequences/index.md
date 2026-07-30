---
title: Unendliche Sequenzen
translations_gpt:
---

{% include menu.html %}

Ersetzen Sie den Endwert durch ein `*`, und die Sequenz wird **unendlich** — sie hat kein letztes Element. Da die Liste träge ist, ist das völlig ungefährlich: Es wird nichts berechnet, bis Sie es entnehmen.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

Die Folge der Zweierpotenzen läuft ewig weiter, aber `.head(5)` entnimmt nur die ersten fünf. Der Bereich `1..*` ist die einfachste unendliche Sequenz — alle ganzen Zahlen ab eins:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Sie können eine Sequenz sogar mithilfe ihrer eigenen früheren Elemente festlegen. Die Fibonacci-Folge, in der jede Zahl die Summe der beiden vorigen ist, ist bekanntlich ein Einzeiler:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

Die Closure `* + *` nimmt die beiden vorigen Elemente und addiert sie. Die Sequenz in `@fib` abzulegen ist hier unbedenklich, denn der Operator `...` kennzeichnet sie als träge, das Array versucht also nicht, sie ganz zu berechnen — nur die zehn von `@fib[^10]` angeforderten Elemente entstehen überhaupt.

Die Faustregel: Eine unendliche Sequenz ist sicher, solange Sie ihr nur ein endliches Stück entnehmen.

{% include nav.html %}
