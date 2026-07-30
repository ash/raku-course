---
title: Feeds aneinanderreihen
translations_gpt:
---

{% include menu.html %}

Der wahre Wert von Feeds zeigt sich, wenn Sie mehrere Stufen haben. Jedes `==>` reicht sein Ergebnis an die nächste Operation weiter, eine ganze Pipeline liest sich also von oben nach unten in der Reihenfolge, in der die Arbeit geschieht:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Folgen Sie den Daten die Seite hinunter: beginne mit `1..10`, behalte die geraden Zahlen, quadriere jede davon und sammle das Ergebnis. Die geraden Zahlen sind `2, 4, 6, 8, 10`, und ihre Quadrate sind `4, 16, 36, 64, 100`.

Als Methodenkette geschrieben ist dieselbe Pipeline `(1..10).grep(* %% 2).map(* ** 2)` — und die liest sich genau wie der Feed von links nach rechts. Eine Methodenkette ist nicht von innen nach außen; sie führt ihre Stufen in genau derselben Reihenfolge aus. Die Form, die sich wirklich von innen nach außen liest, ist das Verschachteln der Operationen als gewöhnliche Funktionen, `map(* ** 2, grep(* %% 2, 1..10))`, wo Sie beim innersten Aufruf anfangen und sich nach außen arbeiten müssen.

Ein Feed ist also kein Weg, von-innen-nach-außen-Code zu entkommen — er ist eine andere Schreibweise einer Pipeline von links nach rechts. Was er hinzufügt, ist die Anordnung: Jede `==>`-Stufe darf in einer eigenen Zeile stehen, und derselbe Operator funktioniert gleichermaßen für Schritte im Methoden- wie im Funktionsstil, was eine lange Pipeline gut überschaubar hält. Feeds und Methodenketten erledigen letztlich dieselbe Arbeit; wählen Sie, was eine bestimmte Umformung am klarsten macht.

{% include nav.html %}
