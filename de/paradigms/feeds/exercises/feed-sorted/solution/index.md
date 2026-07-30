---
title: 'Lösung: Sortieren mit einem Feed'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
(3, 1, 2) ==> sort() ==> my @sorted;
say @sorted;
```

🦋 Du findest den Quellcode in der Datei [feed-sorted.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-sorted.raku).

## Ausgabe

```
[1 2 3]
```

## Kommentare

1. Der Feed schickt die drei Zahlen in `sort`, das sie in Reihenfolge bringt.

1. Das sortierte Ergebnis fließt in `@sorted`.

{% include nav.html %}
