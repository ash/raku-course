---
title: 'Lösung: Ein hyper map'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Du findest den Quellcode in der Datei [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Ausgabe

```
APPLE BANANA CHERRY
```

## Kommentare

1. `.hyper` führt die ganze Kette — das `map`, das großschreibt, und das `grep`, das nach Länge filtert — parallel über Threads aus.

1. Da `.hyper` die Reihenfolge bewahrt, bleiben die übrig gebliebenen Wörter in ihrer ursprünglichen Folge, `.join(' ')` erzeugt also `APPLE BANANA CHERRY`. `pear` mit nur vier Buchstaben fällt weg.

{% include nav.html %}
