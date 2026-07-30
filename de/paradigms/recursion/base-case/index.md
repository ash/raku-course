---
title: Der Grundfall
translations_gpt:
---

{% include menu.html %}

Jede rekursive Subroutine braucht einen _Grundfall_: eine Bedingung, unter der sie eine Antwort liefert, **ohne** sich erneut aufzurufen. Ohne einen solchen würde sich die Subroutine ewig selbst aufrufen.

Bei der Fakultät war der Grundfall „`$n` ist `1` oder kleiner“. Hier ist ein weiteres Beispiel, das bis null herunterzählt:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

Das Programm gibt aus:

```
3
2
1
```

Die erste Zeile ist der Grundfall: Sinkt `$n` unter `1`, kehrt die Subroutine sofort zurück, und die Kette der Aufrufe endet. Der rekursive Schritt bewegt sich stets **auf** den Grundfall zu, indem er `countdown` mit einer kleineren Zahl aufruft.

Vergessen Sie den Grundfall, oder erreichen die Schritte ihn nie, hält die Rekursion nie an, und das Programm scheitert schließlich. Eine richtige rekursive Subroutine hat stets zweierlei: einen Grundfall, der die Rekursion beendet, und einen Schritt, der jeden Aufruf näher an ihn heranbringt.

{% include nav.html %}
