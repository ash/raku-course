---
title: Die Datenstruktur dumpen
---

{% include menu.html %}

## Aufgabe

Du hast die folgende verschachtelte Datenstruktur:

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');
```

Mache zwei Dinge damit:

1. Gib einen entwicklerfreundlichen Dump von `@data` mit `dd` aus.
2. Gib dieselbe Darstellung als String aus, mit dem Präfix `Structure: `.

## Beispiel

Das Programm gibt zwei ähnliche Zeilen aus:

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
