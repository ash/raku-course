---
title: Sets, Bags und Mixes
---

{% include menu.html %}

Neben Arrays und Hashes bietet Raku einige spezialisierte Container für Sammlungen von Werten. Der einfachste ist das `Set` — eine ungeordnete Sammlung von _verschiedenen_ Werten, bei der jeder Wert entweder enthalten ist oder nicht, und Duplikate ignoriert werden.

Du erstellst ein Set mit der `set`-Routine. Wiederholte Werte werden zu einem zusammengefasst:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Obwohl fünf Zahlen übergeben wurden, hat das Set nur drei Elemente, weil `1` und `2` mehr als einmal vorkamen.

Die wichtigste Frage, die du an ein Set stellst, ist, ob ein Wert darin enthalten ist. Der Operator `∈` (lies: "ist Element von") gibt einen Booleschen Wert zurück:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Wenn du lieber reines ASCII verwenden möchtest, kann derselbe Operator als `(elem)` geschrieben werden:

```raku
say 2 (elem) set(1, 2, 3); # True
```

Die folgenden Themen zeigen, wie man Sets kombiniert, und stellen Bags und Mixes vor, die enge Verwandte des Sets sind.

{% include nav.html %}
