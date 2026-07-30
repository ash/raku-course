---
title: 'Lösung: Ziehen Sie die Zahl heraus'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Du findest den Quellcode in der Datei [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Ausgabe

```
5
```

## Kommentare

1. Das Muster trifft die Ziffern und das wörtliche `kg`, der inline stehende Block legt aber nur `$<number>.Int` ab — die ganze Zahl, ohne die Einheit.

1. `made` liest diesen Wert zurück: eine echte `5`, bereit zum Rechnen, statt des Textes `5kg`. Das ist die typische Aufgabe von `make` — einen Treffer in den sauberen Wert zu verwandeln, den Sie tatsächlich wollen.

{% include nav.html %}
