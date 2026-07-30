---
title: Das Iteratorprotokoll
translations_gpt:
---

{% include menu.html %}

Jeder Wert, über den Sie laufen können — eine Liste, ein Bereich, ein Array —, kann Ihnen mit der Methode `.iterator` einen _Iterator_ überreichen. Ein Iterator hat eine wesentliche Methode, `pull-one`, die bei jedem Aufruf den nächsten Wert liefert:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Gehen die Werte aus, liefert `pull-one` statt eines echten Elements einen besonderen Wächter, `IterationEnd`. Dieselbe `$it` um einen weiteren Wert zu bitten zeigt ihn:

```raku
say $it.pull-one =:= IterationEnd; # True
```

Der Operator `=:=` prüft auf **dasselbe Objekt**, und so erkennen Sie den Wächter. Dieses Detail ist innerhalb einer Schleife wichtig, wo Sie den geholten Wert behalten *und* prüfen müssen. Wenn Sie ihn mit `=` **zuweisen**, landet der Wert in einem Container, und der Vergleich betrachtet am Ende den Container statt `IterationEnd`. Die Abhilfe ist, mit `:=` zu **binden**, sodass die Variable schlicht das *ist*, was `pull-one` geliefert hat:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # bind, not assign
    last if $v =:= IterationEnd;
    say $v;
}
```

Die Schleife gibt `a`, `b`, `c` aus und hält dann an. Genau das tut eine `for`-Schleife unter der Haube für Sie: Sie ruft `.iterator` auf dem Ding auf, über das Sie laufen, und ruft weiter `pull-one` auf, bis sie `IterationEnd` antrifft. Sie müssen das selten von Hand ausschreiben, doch es einmal zu tun zeigt, dass Raku in Wahrheit über Iteratoren läuft und nicht über Listen.

{% include nav.html %}
