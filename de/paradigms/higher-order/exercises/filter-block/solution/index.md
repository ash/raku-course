---
title: 'Lösung: Filtern mit einem Block'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (1..10).grep(* > 5).elems;
```

🦋 Du findest den Quellcode in der Datei [filter-block.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/filter-block.raku).

## Ausgabe

```
5
```

## Kommentare

1. `grep` nimmt den Block `* > 5` auf und behält die Zahlen, für die er wahr ist: `6, 7, 8, 9, 10`.

1. `.elems` zählt sie, was `5` ergibt.

{% include nav.html %}
