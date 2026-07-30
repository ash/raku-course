---
title: 'Lösung: Dreieckszahl'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
multi tri(0)  { 0 }
multi tri($n) { $n + tri($n - 1) }

say tri(5);
```

🦋 Du findest den Quellcode in der Datei [triangular-number.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/triangular-number.raku).

## Ausgabe

```
15
```

## Kommentare

1. Der Grundfall ist ein eigener Kandidat: `multi tri(0)` trifft nur, wenn das Argument genau `0` ist, und liefert `0` ohne Rekursion.

1. Jeder andere Aufruf landet in `multi tri($n)`, das `$n` zur Dreieckszahl von `$n - 1` addiert. Die Aufrufe steigen `5 + 4 + 3 + 2 + 1 + 0` hinab, und sobald das Argument `0` erreicht, wechselt die Auswahl zum Grundfall-Kandidaten, und die Summe wickelt sich zu `15` ab.

{% include nav.html %}
