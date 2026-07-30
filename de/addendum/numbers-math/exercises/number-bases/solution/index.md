---
title: 'Lösung: Eine Zahl, drei Basen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Du findest den Quellcode in der Datei [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Ausgabe

```
11111111
377
FF
```

## Kommentare

1. Die Methode `.base` stellt eine Ganzzahl in jeder Basis von 2 bis 36 dar und liefert
eine Zeichenkette. `255` ist `11111111` im Binärsystem und `FF` im Hexadezimalsystem —
der größte Wert, der in ein Byte passt.

{% include nav.html %}
