---
title: Boolesche Operationen mit anderen Typen
---

{% include menu.html %}

Im nächsten Abschnitt werden wir darüber sprechen, wie man Daten verschiedener Typen ineinander umwandelt. Aber vorher ist es wichtig, das folgende Merkmal von Raku hervorzuheben. Wenn Sie boolesche Operationen auf Zeichenketten oder Ganzzahlen anwenden, werden die Werte nicht in Boolesche umgewandelt, und das Ergebnis ist auch kein Boolescher Wert. Betrachten Sie die folgenden Beispiele:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Lassen Sie uns die Regeln 📖 [aus der Dokumentation](https://docs.raku.org/language/operators#Tight_AND_precedence) lesen:

* `&&` gibt das erste Argument zurück, das im Booleschen Kontext als Falsch bewertet wird, andernfalls das letzte Argument.
* `||` gibt das erste Argument zurück, das im Booleschen Kontext als Wahr bewertet wird, andernfalls das letzte Argument.
* `^^` gibt das Wahre Argument zurück, wenn es eines (und nur eines) gibt. Gibt das letzte Argument zurück, wenn alle Argumente Falsch sind. Gibt `Nil` zurück, wenn mehr als ein Argument wahr ist.

Beachten Sie, dass wir gerade einen 'Null'-Wert `Nil` kennengelernt haben.

{% include nav.html %}