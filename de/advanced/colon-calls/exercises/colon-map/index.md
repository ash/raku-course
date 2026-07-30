---
title: Ein Doppelpunkt-map
translations_gpt:
---

{% include menu.html %}

## Problem

Hier ist ein Ausdruck, der die Zahlen `1` bis `10` verdoppelt und dann nur diejenigen behält, die größer als `10` sind:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Schreibe ihn so um, dass der `grep`-Methodenaufruf die Doppelpunkt-Form anstelle von Klammern verwendet. Lass den Rest der Kette unverändert. Denke daran, dass die Doppelpunkt-Form den Rest der Anweisung verbraucht, sodass nur der letzte Aufruf in einer Kette sie verwenden darf.

## Beispiel

Das Programm gibt aus:

```
(12 14 16 18 20)
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
