---
title: 'Lösung: Eine rennende Summe'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Du findest den Quellcode in der Datei [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Ausgabe

```
22100
```

## Kommentare

1. `.race` führt die ganze Kette — jede Zahl quadrieren und nach den geraden Quadraten filtern — parallel aus und verspricht, anders als `.hyper`, nicht, die Elemente in Reihenfolge zu liefern.

1. Das ist hier unbedenklich, denn der letzte Schritt ist eine Summe, die von der Reihenfolge unabhängig ist: Die geraden Quadrate (`2²`, `4²`, …, `50²`) summieren sich zu `22100`, in welcher Reihenfolge sie auch eintreffen. Wenn Sie die Ergebnisse nur zusammenfassen (Summe, Anzahl), ist `.race` die natürliche Wahl und kann etwas weniger Aufwand mit sich bringen als `.hyper`.

{% include nav.html %}
