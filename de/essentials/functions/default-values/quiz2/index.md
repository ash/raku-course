---
title: Quiz — Funktionen mit Standardwerten
---

{% include menu.html %}

Was ist das Ergebnis des Aufrufs der folgenden Funktion mit verschiedenen Argumenten?

```raku
sub f($a, $b = 4, $c = 5) {
    $a + $b + $c
}
```

{:.quiz-select}
10 | `f(1)` gibt&nbsp; zurück (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
8 | `f(1, 2)` gibt&nbsp; zurück (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
6 | `f(1, 2, 3)` gibt&nbsp; zurück (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)

{% include quiz.html %}

{% include nav.html %}