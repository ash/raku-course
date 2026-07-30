---
title: Zwei Prüfungen planen
---

{% include menu.html %}

## Problem

Schreibe eine Testdatei, die mit `plan` (nicht `done-testing`) im Voraus angibt, dass sie genau zwei Prüfungen enthält. Diese Prüfungen sollen sein:

1. Mit `is-deeply`, dass das Sortieren der Liste `3, 1, 2` das Ergebnis `[1, 2, 3]` liefert.
1. Mit `is`, dass `10 % 3` gleich `1` ist.

Gib jeder Prüfung eine kurze Beschreibung deiner Wahl.

## Beispiel

Mit den Beschreibungen `sorted` und `remainder` gibt das Programm aus:

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
