---
title: Ungeordnete Parallelität mit race
translations_gpt:
---

{% include menu.html %}

`.race` parallelisiert auf dieselbe Weise wie `.hyper`, mit einem Unterschied: Es verspricht **nicht**, die Ergebnisse in Reihenfolge zu liefern. Welcher Arbeiter zuerst fertig ist, steuert sein Ergebnis zuerst bei.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

Die Quadrate kommen in unvorhersagbarer Reihenfolge zurück, das `.sort` steht also dort, um die Ausgabe bestimmt zu machen. Hätten wir ohne Sortieren ausgegeben, wären alle Zahlen da, aber womöglich durcheinander.

Da es die Ergebnisse nicht in Reihenfolge halten muss, kann `.race` etwas weniger Aufwand haben als `.hyper`. Die Abwägung ist einfach:

* nehmen Sie `.hyper`, wenn die **Reihenfolge** der Ergebnisse zählt;
* nehmen Sie `.race`, wenn sie es **nicht** tut — etwa wenn Sie die Ergebnisse summieren, zählen oder sonst auf von der Reihenfolge unabhängige Weise verbinden.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Summieren ist von der Reihenfolge unabhängig, `.race` ist hier also eine gute Wahl und ergibt dieselben `10100`. Beiden Methoden liegt derselbe Gedanke zugrunde — unabhängige Arbeit zugleich laufen lassen —, und Sie wählen danach, ob Ihnen die Reihenfolge wichtig ist.

{% include nav.html %}
