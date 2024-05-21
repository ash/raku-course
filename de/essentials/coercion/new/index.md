---
title: Konvertierung von Typen mithilfe von Konstruktorformen
---

{% include menu.html %}

Eine ähnliche Methode besteht darin, eine neue Instanz eines Objekts des erforderlichen Typs zu erstellen, indem dessen Konstruktor aufgerufen wird, dessen Name der Name des Typs ist. Zum Beispiel:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Hier wird die Zeichenkette, die eine Gleitkommazahl enthält, in eine Ganzzahl konvertiert.

{% include nav.html %}