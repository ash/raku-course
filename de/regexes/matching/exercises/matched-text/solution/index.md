---
title: 'Lösung: Der getroffene Text'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
'database' ~~ /base/;
say $/.Str;
```

🦋 Du findest den Quellcode in der Datei [matched-text.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/matched-text.raku).

## Ausgabe

```
base
```

## Kommentare

1. Jeder Smartmatch legt sein Ergebnis in der besonderen Match-Variablen `$/` ab, es ist also nicht nötig, es einer eigenen Variablen zuzuweisen.

1. Das Match-Objekt enthält den getroffenen Text; `.Str` auf `$/` aufzurufen liefert diesen Text als gewöhnliche Zeichenkette. Das Match-Objekt unmittelbar auszugeben hätte stattdessen `｢base｣` gezeigt.

{% include nav.html %}
