---
title: Mengenoperationen
---

{% include menu.html %}

Sets können mit den ueblichen Operationen aus der Mengenlehre kombiniert werden. Jeder Operator hat ein Unicode-Symbol und eine ASCII-Schreibweise; du kannst verwenden, was dir lieber ist.

Die _Vereinigung_ `∪` (oder `(|)`) sammelt alle Werte, die in einem der beiden Sets enthalten sind:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

Die beiden Sets teilen den Wert `3`, daher hat die Vereinigung fuenf verschiedene Elemente: `1, 2, 3, 4, 5`.

Der _Durchschnitt_ `∩` (oder `(&)`) behaelt nur die Werte, die in beiden Sets enthalten sind:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — beachte, dass Sets ungeordnet sind
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Hier enthaelt der Durchschnitt `2` und `3` -- die Werte, die in beiden Sets vorhanden sind. Ein Set hat keine feste Reihenfolge, daher können die beiden Elemente beim Ausgeben in beliebiger Reihenfolge erscheinen.

Das Ergebnis dieser Operationen ist selbst ein Set, sodass du dieselben Fragen stellen kannst: wie viele Elemente es hat und ob ein bestimmter Wert darin enthalten ist.

{% include nav.html %}
