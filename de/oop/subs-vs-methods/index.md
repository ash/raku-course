---
title: Subroutinen versus Methoden
translations_gpt:
---

{% include menu.html %}

Sie haben nun zwei Möglichkeiten, ein Stück Verhalten zu verpacken: eine _Subroutine_ und eine _Methode_. Sie sehen ähnlich aus, werden aber unterschiedlich verwendet.

Eine Subroutine steht für sich. Sie rufen sie über ihren Namen auf und übergeben ihr alles Nötige als Argumente:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Eine Methode gehört zu einer Klasse und wird mit dem Punkt auf einem Objekt aufgerufen. Sie kann über `self` und die Attribut-Accessoren die eigenen Daten des Objekts verwenden, diese Daten übergeben Sie also nicht:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Beide berechnen dieselbe Zahl. Der Unterschied liegt darin, woher die Daten kommen: Die Subroutine erhält den Radius als Argument, während die Methode ihn von dem Objekt liest, auf dem sie aufgerufen wurde.

Als Faustregel: Nehmen Sie eine Subroutine für eine eigenständige Operation, die einfach ihre Argumente umwandelt, und eine Methode, wenn das Verhalten von Natur aus zu einem Objekt gehört und mit dessen eigenem Zustand arbeitet. Für klassenspezifische, aber allgemeine Routinen nehmen Sie Klassenmethoden.

{% include nav.html %}
