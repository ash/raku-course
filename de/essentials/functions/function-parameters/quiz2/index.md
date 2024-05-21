---
title: Quiz — Übergabe von Argumenten
---

{% include menu.html %}

## 1

Es gibt eine Funktion mit folgender Definition:

```raku
sub f {
    say 'Function called';
}
```

Wählen Sie die korrekten Aufrufe dieser Funktion.

{:.quiz}
1 | f;
0 | f(&apos;&apos;); | Die Funktion akzeptiert keine Argumente, aber hier wird eins übergeben.
0 | f &apos;&apos;; | Dasselbe wie oben.
1 | f(); | Das ist in Ordnung, keine Argumente übergeben.
0 | f (); | Hier wird ein Argument (eine leere Liste) übergeben.
0 | f(10);

## 2

Es gibt eine weitere Funktion.

```raku
sub g($x, $y) {
    say "Called g($x, $y)";
}
```

Wählen Sie die korrekten Aufrufe dieser Funktion.

{:.quiz}
1 | g(10, 20);
0 | g 10 20; | Kein Komma zwischen den Argumenten.
0 | g(10); | Zu wenige Argumente: zwei erforderlich, eins übergeben.
1 | g 10, 20; | Klammern sind nicht erforderlich, wenn es nicht mehrdeutig ist.
0 | g(10,); | Keine gültige Syntax.
0 | g(,20); | Auch keine gültige Syntax.
0 | g(&apos;10, 20&apos;); | Ein einzelnes String-Argument übergeben.
1 | g(&apos;word&apos;, 20); | Argumente können unterschiedliche Typen haben.
0 | g(10, 20, 30); | Zu viele Argumente.
0 | g 10, 20, 30; | Auch hier: drei Argumente werden übergeben.


{% include quiz.html %}

{% include nav.html %}