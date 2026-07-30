---
title: Mehrfach-Dispatch
translations_gpt:
---

{% include menu.html %}

Im Teil „Grundlagen" haben Sie [_Multi-Funktionen_](/de/essentials/more-on-functions/multi-functions) kennengelernt: mehrere Subroutinen, die denselben Namen teilen, wobei Raku anhand der Typen der Argumente die richtige auswählt. Dieser Mechanismus wird _Multiple Dispatch_ genannt.

Bisher wurde die Auswahl anhand des _Typs_ der Argumente getroffen. Eine `where`-Klausel erlaubt es, noch weiter zu gehen und auch anhand des _Werts_ zu dispatchen. Sie wird nach einem Parameter geschrieben und enthält eine Bedingung, die das Argument erfüllen muss, damit dieser Kandidat gewählt wird:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Jeder Aufruf geht an den Kandidaten, dessen Bedingung für den gegebenen Wert wahr ist:

```
-5 is negative
0 is zero
7 is positive
```

Alle drei Kandidaten haben dieselbe Signatur, was die Typen betrifft — ein einzelnes `Int` — ohne die `where`-Klauseln würden sie also kollidieren. Die Bedingungen machen sie unterscheidbar.

## Ein Basisfall für die Rekursion

Ein häufiger Einsatz von `where` besteht darin, den Endpunkt einer Rekursion als separaten Kandidaten bereitzustellen. Hier ist erneut die Fakultät, aufgeteilt in zwei Multi-Subs:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

Der erste Kandidat behandelt den Basisfall (`$n` von `1` oder kleiner) und gibt einfach `1` zurück. Jeder andere Wert geht an den zweiten Kandidaten, der `fact` erneut mit einer kleineren Zahl aufruft. Es gibt kein `if` innerhalb der Funktion — die Wahl zwischen Basisfall und rekursivem Schritt wird vom Dispatcher getroffen.

{% include nav.html %}
