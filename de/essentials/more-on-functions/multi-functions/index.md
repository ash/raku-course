---
title: Multi-Funktionen
---

{% include menu.html %}

Raku implementiert _Multiple Dispatch_ basierend auf der Funktionssignatur. Es erlaubt das Erstellen von Funktionen, die denselben Namen teilen, aber unterschiedliche Typen von Eingabedaten haben. Verwenden Sie den `multi` Deklarator für jede der Varianten der Funktion.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Es ist in Ordnung, `sub` nach `multi` wegzulassen.)

Wenn Sie zwei Varianten derselben Funktion haben, führt der Compiler Multiple Dispatch durch, je nachdem, welche Argumente er im Funktionsaufruf sieht. Vergleichen Sie die folgenden zwei Aufrufe:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

Der erste Aufruf löst die Funktion mit ganzzahligen Parametern aus, während der zweite Aufruf die zweite Variante der Funktion ausführt, die zwei Zeichenketten erwartet.

## Literale Parameter

Ein interessanter Fall für Multi-Funktionen ist es, Varianten zu haben, die literale Werte als Parameter haben. Betrachten Sie die folgenden zwei Varianten:

```raku
multi sub f(42) {say 'Das ist die Antwort'}
multi sub f($x) {say "$x ist nicht die Antwort"}
```

Die erste Variante wird nur ausgeführt, wenn Sie die Funktion mit dem genauen Wert 42 aufrufen. In anderen Fällen wird die zweite Variante verwendet. Die Reihenfolge, in der diese Funktionen definiert sind, spielt keine Rolle.

```raku
f(10); # 10 ist nicht die Antwort
f(42); # Das ist die Antwort
```

{% include nav.html %}