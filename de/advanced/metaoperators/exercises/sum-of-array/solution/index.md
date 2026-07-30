---
title: 'Solution: Durchschnitt eines Arrays'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 Den Quellcode finden Sie in der Datei [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Ausgabe

```
25
```

## Kommentare

1. Der Reduktions-Meta-Operator `[+]` setzt den `+`-Operator zwischen alle Elemente von `@data`, sodass `[+] @data` gleichbedeutend mit `10 + 20 + 30 + 40` ist, also `100`. Die Klammern sind nötig, damit die Reduktion vor der Division erfolgt.

1. Die Division der Summe durch `@data.elems`, die Anzahl der Elemente, ergibt den Durchschnitt `25`. Hätte das Ergebnis nicht glatt aufgeteilt werden können, hätte Raku einen exakten `Rat` erzeugt, anstatt zu runden.

{% include nav.html %}
