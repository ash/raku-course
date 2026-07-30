---
title: 'Lösung: Beginnt mit'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so '3 apples' ~~ /^ \d /;
```

🦋 Du findest den Quellcode in der Datei [starts-with.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/starts-with.raku).

## Ausgabe

```
True
```

## Kommentare

1. Der Anker `^` zwingt den Treffer, am Anfang der Zeichenkette zu beginnen, und `\d` verlangt dann, dass dieses erste Zeichen eine Ziffer ist.

1. Ohne das `^` würde das Muster auch für eine Ziffer gelingen, die irgendwo später in der Zeichenkette steht, etwa in `'apples 3'`.

{% include nav.html %}
