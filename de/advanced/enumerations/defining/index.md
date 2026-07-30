---
title: Ein Enum definieren
---

{% include menu.html %}

Deklariere ein Enum mit dem Schlüsselwort `enum`, einem Namen und der Liste der Konstantennamen:

```raku
enum Colour <red green blue>;
```

Dies erstellt einen neuen Typ, `Colour`, und drei Konstanten: `red`, `green` und `blue`. Du kannst die Konstanten direkt über ihren Namen verwenden:

```raku
say red;   # red
say green; # green
```

Hinter jedem Namen steht eine Zahl, die automatisch ab Null in der Reihenfolge zugewiesen wird, in der du sie aufgelistet hast — `red` ist `0`, `green` ist `1`, `blue` ist `2`. Da die Werte geordnet sind, kannst du die Konstanten vergleichen:

```raku
say red < blue; # True
```

Eine Variable kann mit dem Enum typisiert werden, sodass sie nur diese Konstanten akzeptiert:

```raku
my Colour $c = green;
say $c; # green
```

Wenn ein Name mit etwas anderem in deinem Programm kollidieren könnte, kannst du eine Konstante immer über den Namen des Enums mit `::` ansprechen:

```raku
say Colour::red; # red
```

Ein Enum gibt einer Menge verwandter Konstanten einen Namen und einen Typ, was Code, der sie verwendet, viel klarer macht als bloße Zahlen. Das nächste Thema behandelt [die Zahlen hinter den Namen](/de/advanced/enumerations/values-and-keys).

{% include nav.html %}
