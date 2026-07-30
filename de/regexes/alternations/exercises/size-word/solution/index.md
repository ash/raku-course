---
title: 'Lösung: Ein Größenwort'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Du findest den Quellcode in der Datei [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Ausgabe

```
｢large｣
```

## Kommentare

1. Die Alternation führt drei Möglichkeiten auf; das Muster trifft diejenige, die in der Zeichenkette vorhanden ist.

1. Nur `large` kommt vor, das ist also der Treffer.

{% include nav.html %}
