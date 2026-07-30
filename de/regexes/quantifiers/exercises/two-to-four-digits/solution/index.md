---
title: 'Lösung: Zwei bis vier Ziffern'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Du findest den Quellcode in der Datei [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Ausgabe

```
｢1234｣
```

## Kommentare

1. `\d ** 2..4` trifft zwischen zwei und vier Ziffern in Folge.

1. Die Zeichenkette hat fünf Ziffern zu bieten, der Bereich deckelt den Treffer aber bei vier, das Muster nimmt also `1234` und lässt die letzte `5` liegen. Gierig wie es ist, nimmt es das Meiste, was der Bereich zulässt, und nicht das Wenigste.

1. Gier gilt nur innerhalb eines einzelnen Treffers — die Maschine hält weiterhin an der **ersten** Stelle an, an der das Muster gelingt. Selbst wenn später in der Zeichenkette eine längere Ziffernfolge steht, wird sie nie erreicht:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Hier wird `123` getroffen, obwohl die spätere Folge `6789012` den ganzen Bereich mit `6789` gefüllt hätte. Der am weitesten links stehende Treffer gewinnt.

{% include nav.html %}
