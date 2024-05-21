---
title: Typisierte Parameter von Funktionen
---

{% include menu.html %}

Funktionsparameter in Raku können typbeschränkt gemacht werden. Dies ist sehr ähnlich zu [typisierten Variablen](/de/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Die Funktion verlangt nun, dass ihre Argumente ganze Zahlen sind.

```raku
say add(10, 20);
# say add(pi, e); # Fehler
```

Ein Versuch, einen Parameter eines anderen Typs als `Int` zu übergeben, führt zu einem Kompilierungsfehler.

```
$ raku t.raku
===SORRY!=== Fehler beim Kompilieren von t.raku
Das Aufrufen von add(Num, Num) wird niemals mit der deklarierten Signatur (Int $x, Int $y) funktionieren
in t.raku:5
------> say ⏏add(pi, e);
```

Beachten Sie, dass Raku Typen nicht automatisch konvertiert, selbst wenn dies in anderen Fällen möglich ist.

```raku
# say add('3', '4'); # Fehler
say '3' + '4'; # OK und ergibt 7
```

%%tipblock
## Wie man erkennt, ob es ein Kompilierungsfehler ist
Wenn die Fehlermeldung mit `===SORRY!=== Fehler beim Kompilieren` beginnt, bedeutet dies, dass der Fehler zur Kompilierzeit aufgetreten ist.
%%/tipblock

{% include nav.html %}