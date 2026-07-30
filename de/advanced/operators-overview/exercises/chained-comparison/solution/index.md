---
title: 'Solution: Verketteter Vergleich'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 0 <= 73 <= 100;
```

🦋 Den Quellcode finden Sie in der Datei [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Ausgabe

```
True
```

## Kommentare

1. Vergleichsoperatoren können verkettet werden, sodass `0 <= 73 <= 100` gelesen wird als „0 ist höchstens 73, und 73 ist höchstens 100". Der Operator `<=` erlaubt die Endpunkte, sodass ein Ergebnis von genau `0` oder `100` ebenfalls als gültig zählt.

1. Beide Teile sind wahr, daher ist der gesamte Ausdruck `True`. Beachten Sie, dass der mittlere Wert `73` nur einmal geschrieben wird, obwohl er mit beiden Nachbarn verglichen wird.

1. Ohne die Verkettungsfunktion müssten Sie beide Vergleiche ausschreiben und mit `&&` verbinden, wobei der mittlere Wert wiederholt wird: `0 <= 73 && 73 <= 100`. Die verkettete Form drückt dasselbe kürzer aus.

{% include nav.html %}
