---
title: 'Solution: Sortieren mit Doppelpunkt'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Den Quellcode findest du in der Datei [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Ausgabe

```
(fig pear kiwi apple)
```

## Kommentare

1. Der Doppelpunkt übergibt den Sortierschlüssel an `sort`, ohne dass Klammern darum nötig sind.

1. `*.chars` ist ein Whatever-Ausdruck, der für „die Anzahl der Zeichen jedes Elements" steht. `sort` verwendet ihn als Schlüssel, sodass die Wörter vom kürzesten zuerst ausgegeben werden: `fig` (3), dann `pear` und `kiwi` (4), dann `apple` (5).

1. `pear` behält seine Position vor `kiwi`, da beide gleich lang sind und `sort` stabil ist, also die ursprüngliche Reihenfolge gleicher Schlüssel beibehält.

{% include nav.html %}
