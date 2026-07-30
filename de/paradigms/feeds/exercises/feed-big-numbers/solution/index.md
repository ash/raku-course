---
title: 'Lösung: Leiten Sie die großen Zahlen durch'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Du findest den Quellcode in der Datei [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Ausgabe

```
[6 7 8 9 10]
```

## Kommentare

1. Der Feed schickt `1..10` in `grep`, das die Zahlen größer als `5` behält.

1. Das Ergebnis fließt in `@big`, das Ziel, das den Feed abschließt.

{% include nav.html %}
