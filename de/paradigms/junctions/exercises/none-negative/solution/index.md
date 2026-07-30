---
title: 'Lösung: Keine negativ'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so none(3, 7, 2) < 0;
```

🦋 Du findest den Quellcode in der Datei [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Ausgabe

```
True
```

## Kommentare

1. Eine `none`-Junction ist wahr, wenn **kein** Wert auf den Vergleich trifft.

1. Keine von `3, 7, 2` liegt unter null, das Ergebnis ist also `True`. Ein einziger negativer Wert würde es `False` machen.

{% include nav.html %}
