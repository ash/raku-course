---
title: whenever gegen when
translations_gpt:
---

{% include menu.html %}

Die Form eines `react`-Blocks mag bekannt vorkommen. Ein äußerer Block, der mehrere innere Blöcke enthält, die jeweils auf dem Thema `$_` arbeiten, ist genau die Schreibweise von [`given`/`when`](/de/advanced/given-when). Hätten Sie einen einzelnen Temperaturmesswert statt eines ganzen Stroms davon, würden Sie so darauf verzweigen:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

Die Ähnlichkeit zu `react`/`whenever` ist echt, doch die beiden erledigen sehr verschiedene Aufgaben:

* **`given`/`when` behandelt einen Wert, jetzt sofort.** `given` setzt `$_` auf einen einzelnen Wert; jedes `when` prüft ihn (`$_ ~~ 18`), das **erste** Zutreffen läuft, und der Block ist fertig. Es ist eine gewöhnliche, gleichzeitig ablaufende Verzweigung.
* **`react`/`whenever` behandelt viele Werte, im Lauf der Zeit.** Ein `whenever` prüft `$_` nicht gegen ein Muster — es *abonniert* ein Supply, und sein Rumpf läuft für **jeden** Wert, den dieses Supply aussendet, wann immer dieser Wert eintrifft. Alle `whenever` sind zugleich aktiv, und `react` blockiert weiter, bis jedes ihrer Supplies fertig ist.

`when` fragt also „trifft dieser eine Wert zu?“, während `whenever` sagt „tu dies für jeden Wert, den dieser Strom je erzeugt“. Dasselbe Gerüst, sehr verschiedene Leben: eine einmal genommene Verzweigung gegenüber einer Reaktion, die immer wieder läuft, sobald Ereignisse eintreffen.

{% include nav.html %}
