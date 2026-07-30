---
title: 'Lösung: Verbinden Sie die Zeichenketten'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say [~] '2', '0', '2', '5';
```

🦋 Du findest den Quellcode in der Datei [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Ausgabe

```
2025
```

## Kommentare

1. `[~]` setzt den Verkettungsoperator `~` zwischen die Zeichenketten.

1. `'2' ~ '0' ~ '2' ~ '5'` ergibt die einzelne Zeichenkette `2025`.

{% include nav.html %}
