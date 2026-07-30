---
title: Zwei Zeitgeber
translations_gpt:
---

{% include menu.html %}

Jedes react-Beispiel bisher hat `Supply.from-list` verwendet, das alle seine Werte in dem Augenblick hinausschiebt, in dem es angezapft wird. Deshalb wurde jeder Strom vollständig ausgegeben, bevor der nächste begann — es war kein Warten im Spiel. Echte Ereignisströme sind nicht so: Ihre Werte treffen über die **Zeit** verteilt ein, und ein `react`-Block verflicht sie, wie sie kommen.

Ein Zeitgeber ist der einfachste Strom, der sich so verhält. `Supply.interval($period)` sendet einen aufsteigenden Zähler aus — `0, 1, 2, …` — einmal alle `$period` Sekunden. Lassen Sie zwei davon mit verschiedenen Taktraten in einem `react` laufen, und ihre Werte verweben sich:

```raku
react {
    whenever Supply.interval(0.3) {
        say "tick $_";
    }
    whenever Supply.interval(0.5, 0.25) {
        say "TOCK $_";
    }
    whenever Promise.in(1.4) {
        done;
    }
}
```

Ein typischer Lauf gibt aus:

```
tick 0
TOCK 0
tick 1
tick 2
TOCK 1
tick 3
tick 4
TOCK 2
```

Das schnelle `tick` feuert alle `0.3` Sekunden; das langsamere `TOCK` alle `0.5`, beginnend nach einer Viertelsekunde (das zweite Argument von `interval` ist diese Anfangsverzögerung). Keines wartet auf das andere — der `react`-Block führt schlicht den `whenever`-Rumpf aus, der zum eingetroffenen Wert gehört, die beiden Ströme **durchdringen** einander also, statt sich abzuwechseln.

Da Zeitgeber von selbst nie enden, sorgt ein drittes `whenever` für den Ausgang: `Promise.in(1.4)` wird nach 1,4 Sekunden erfüllt, und sein Rumpf ruft `done` auf, um den `react`-Block zu beenden. Ohne das würde der react ewig ticken und tocken.

Die genaue Verflechtung hängt vom Zeitverlauf ab, ein späterer Lauf ordnet die Zeilen also womöglich etwas anders — doch das ist das Wesen des Reagierens auf lebendige Ereignisse: Sie antworten auf jedes, sobald es geschieht, wann immer es geschieht.

{% include nav.html %}
