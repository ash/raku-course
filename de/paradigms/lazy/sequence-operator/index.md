---
title: Der Sequenzoperator
translations_gpt:
---

{% include menu.html %}

Der Sequenzoperator `...` baut eine Liste von einem Anfangsmuster bis zu einem Endwert. Geben Sie ihm die ersten paar Elemente und den Endpunkt, und er ermittelt, wie die Folge weitergeht:

```raku
say (2, 4 ... 10); # (2 4 6 8 10)
```

Aus `2, 4` schließt er auf „addiere jedes Mal zwei“ und läuft weiter, bis er `10` erreicht. Der Schritt darf auch abwärts gehen:

```raku
say (10, 8 ... 2); # (10 8 6 4 2)
```

Wachsen die Elemente durch Multiplikation statt durch Addition, bemerkt der Operator auch das:

```raku
say (1, 2, 4 ... 64); # (1 2 4 8 16 32 64)
```

Hier ist jedes Glied das Doppelte des vorigen, die Folge ist also geometrisch.

Ist die Regel verwickelter, als der Operator raten kann, können Sie sie ausdrücklich als Closure über die vorigen Elemente angeben. Etwa eine ausdrückliche Regel „addiere den Schritt“:

```raku
say (1, * + 2 ... 9); # (1 3 5 7 9)
```

Der Block `* + 2` sagt, wie man aus dem aktuellen Element das nächste erhält. Damit kann `...` jede Folge ausdrücken, die Sie durch eine Regel beschreiben können.

{% include nav.html %}
