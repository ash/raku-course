---
title: Der Feed-Operator
translations_gpt:
---

{% include menu.html %}

Der Feed-Operator `==>` schickt eine Liste von links in die Operation rechts. Das Ergebnis fließt dann dorthin weiter, wohin das nächste `==>` zeigt, und endet in einer Variablen, die es auffängt:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Lesen Sie es von links nach rechts: nimm `1..10`, behalte die geraden Zahlen und lege das Ergebnis in `@evens` ab. Der Operator `%%` bedeutet „ist teilbar durch“, `* %% 2` behält also die geraden Zahlen.

Die wichtige Regel ist, dass ein Feed in einem **Ziel enden** muss — meist `my @array` (oder eine bestehende Variable). Die Daten fließen vorwärts hinein. Die Zuweisung andersherum zu schreiben, mit `=`, tut nicht, was Sie wollen, denn Feed und Zuweisung geraten sich in die Quere; lassen Sie den Feed stets in seiner Variablen enden.

Ein Feed ist nur eine andere Schreibweise für eine Kette von Listenoperationen. Dasselbe Ergebnis ließe sich als `my @evens = (1..10).grep(* %% 2)` schreiben. Die Feed-Form kommt zur Geltung, wenn es mehrere Stufen gibt, wie das nächste Thema zeigt.

{% include nav.html %}
