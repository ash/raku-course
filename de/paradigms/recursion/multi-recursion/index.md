---
title: Rekursion mit multi-Subs
translations_gpt:
---

{% include menu.html %}

Bisher war der Grundfall eine Zeile _innerhalb_ der Subroutine — ein ternärer Ausdruck oder ein frühes `return`, das das Argument prüft. Raku bietet einen ausdrucksstärkeren Weg, dasselbe zu schreiben. Da eine Subroutine mehrere `multi`-Kandidaten haben kann, können Sie dem Grundfall und dem rekursiven Schritt **je eine eigene Subroutine** geben und die Mehrfachauswahl für jeden Aufruf die richtige wählen lassen.

Erinnern Sie sich an die Fakultät. Mit `multi` werden ihre zwei Fälle zu zwei Subroutinen:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

Der erste Kandidat trifft nur, wenn das Argument genau `0` ist — dieses Literal in der Signatur *ist* der Grundfall. Jeder andere Aufruf geht an den zweiten Kandidaten, der multipliziert und sich selbst aufruft. Wenn `fact($n - 1)` schließlich `0` erreicht, wechselt die Auswahl zum ersten Kandidaten, und die Kette der Aufrufe wickelt sich ab. Der Grundfall ist keine im Rumpf vergrabene Verzweigung mehr; er ist eine Subroutine, die für einen einzigen Wert besteht.

Warum `0` und nicht `1`? Weil jeder Schritt eins abzieht, landet jede Ausgangszahl irgendwann genau auf `0`, und `0!` ist als `1` festgelegt — bei `0` endet der Abstieg also wirklich. Ein Literal-Kandidat trifft genau *einen* Wert, ein Grundfall `multi fact(1)` würde `fact(1)` also richtig berechnen, aber `fact(0)` zu `multi fact($n)` durchfallen lassen und ewig über null hinaus weiterrekursieren. Bei `0` anzuhalten hält die Subroutine für jede nichtnegative ganze Zahl richtig, `fact(0)` eingeschlossen.

Besonders gut liest sich das, wenn es mehr als einen Grundfall gibt. Fibonacci braucht zwei:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Jeder Grundfall ist ein eigener einzeiliger Kandidat, und der rekursive Kandidat erledigt alles Übrige — ganz ohne verschachtelte Bedingungen.

Ein Literal wie `0` trifft nur genau diesen Wert. Deckt der Grundfall einen _Bereich_ ab — „`$n` ist `1` oder kleiner“ —, nehmen Sie stattdessen eine `where`-Einschränkung:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

Der eingeschränkte Kandidat ist spezifischer, Raku probiert ihn also zuerst; der schlichte `$n`-Kandidat fängt alles Übrige auf.

Dieselbe Sorgfalt wie zuvor gilt weiterhin: Jeder rekursive Weg muss einen Grundfall-Kandidaten erreichen. Die Fakultät mit dem Literal `0` ist etwa nur für nichtnegative ganze Zahlen sicher — `fact(-1)` würde über `0` hinausschreiten und ewig weiterrekursieren, weil nie ein Kandidat trifft. Die Fälle auf `multi`-Subs zu verteilen nimmt die Notwendigkeit eines Grundfalls nicht weg; es gibt diesem Grundfall nur einen eigenen Namen und ein eigenes Zuhause.

{% include nav.html %}
