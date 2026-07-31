---
title: Die richtige Methode wählen
---

{% include menu.html %}

Bei alltäglichen Skalaren wie Zahlen und Strings sehen alle drei Darstellungen gleich aus. Sie beginnen sich bei zusammengesetzten oder undefinierten Werten zu unterscheiden. Hier ist ein `Pair`, auf drei Arten dargestellt:

```raku
say (foo => 1).gist; # foo => 1
say (foo => 1).Str;  # foo	1
say (foo => 1).raku; # :foo(1)
```

Eine grobe Faustregel:

* [`.gist`](../gist) — für Ausgaben, die von einer Person *gelesen* werden sollen (`say`, `note`).
* [`.Str`](../str) — für Ausgaben, die *reiner Text* sind (`print`, `put`, Interpolation, der Operator `~`).
* [`.raku`](../raku-method) — für eine *codeähnliche* Darstellung beim Debuggen (`dd`).

Jede dieser Methoden kann in eigenen Klassen mit einer eigenen Definition versehen werden, sodass auch eigene Objekte schön ausgegeben werden. Darauf kommen wir zurück, wenn wir im nächsten Teil [Klassen erstellen](/de/oop/classes).

{% include nav.html %}
