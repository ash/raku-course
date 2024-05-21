---
title: Typumwandlung für typisierte Variablen
---

{% include menu.html %}

Typbeschränkungen sind streng genug. Zum Beispiel können Sie einem als `Int` deklarierten Variablen keinen `Num`-Wert zuweisen, selbst wenn dieser eine ganze Zahl enthält:

```raku
my Int $x = 42;
# $x = 42e1; # Fehler
```

Verwenden Sie [eine der Methoden](/de/essentials/coercion/#topics-in-this-section), um den Wert zu konvertieren.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}