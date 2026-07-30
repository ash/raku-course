---
title: 'Lösung: Eine Zahl mit proto'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Du findest den Quellcode in der Datei [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Ausgabe

```
True
```

## Kommentare

1. Das Prototoken `number` hat zwei Spielarten, `dec` und `hex`.

1. Bei `0xff` trifft die Spielart `dec` nur die führende `0`, wonach `xff` übrig bliebe; die Spielart `hex` trifft das Ganze. Longest-token matching wählt daher `hex`, und die Zeichenkette wird zerlegt. Dieselbe Grammatik nimmt weiterhin eine schlichte Dezimalzahl wie `42` an.

{% include nav.html %}
