---
title: 'Lösung: Eine blanke Zahl'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say '5 and $9' ~~ / <!after '$'> \d+ /;
```

🦋 Du findest den Quellcode in der Datei [bare-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/bare-number.raku).

## Ausgabe

```
｢5｣
```

## Kommentare

1. `<!after '$'>` ist ein verneinender Lookbehind: Er gelingt nur, wenn das Zeichen unmittelbar vor der aktuellen Position **kein** `$` ist. Er prüft diesen Nachbarn, ohne ihn zu verbrauchen.

1. Die `9` wird abgelehnt, weil sie direkt hinter einem `$` steht, die Maschine trifft also stattdessen die frühere `5`, der nichts vorausgeht.

{% include nav.html %}
