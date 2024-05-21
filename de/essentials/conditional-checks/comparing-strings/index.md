---
title: Vergleich von Zeichenketten
---

{% include menu.html %}

Der Vergleich von Zeichenketten verwendet eine eigene Menge von Operatoren:

`eq` | Gleich
`ne` | Ungleich
`gt` | Größer als
`ge` | Größer als oder gleich
`lt` | Kleiner als
`le` | Kleiner als oder gleich

## Beispiele

Untersuchen Sie einige Beispiele zum Vergleich von zwei Zeichenketten:

```raku
say 'alpha' lt 'beta'; # True
say 'word' ne 'Word';  # True
say 'xyz' gt 'xvw';    # True
```

{% include nav.html %}