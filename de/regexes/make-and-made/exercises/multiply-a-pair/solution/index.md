---
title: 'Lösung: Multiplizieren Sie ein Paar'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Product {
    token TOP { <a> '*' <b> { make $<a>.Int * $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Product.parse('4*5').made;
```

🦋 Du findest den Quellcode in der Datei [multiply-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/multiply-a-pair.raku).

## Ausgabe

```
20
```

## Kommentare

1. Die beiden Zahlen werden als `<a>` und `<b>` gecapturt, jede mit `.Int` umgewandelt.

1. Der inline stehende Block verbindet die Teiltreffer — er multipliziert sie — und legt das Ergebnis auf dem Treffer ab, das `made` dann liefert.

{% include nav.html %}
