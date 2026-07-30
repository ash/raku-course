---
title: 'Lösung: Hat es getroffen?'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so 'Hello, World' ~~ /World/;
```

🦋 Du findest den Quellcode in der Datei [did-it-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/did-it-match.raku).

## Ausgabe

```
True
```

## Kommentare

1. Ein erfolgreicher Treffer ist ein wahrer Wert, wird aber als Match-Objekt ausgegeben. Die Funktion `so` macht daraus ein schlichtes `True` oder `False`.

{% include nav.html %}
