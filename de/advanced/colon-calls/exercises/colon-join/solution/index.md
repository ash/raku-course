---
title: 'Solution: Verbinden mit Doppelpunkt'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say <a b c>.reverse.join: '-';
```

🦋 Den Quellcode findest du in der Datei [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Ausgabe

```
c-b-a
```

## Kommentare

1. `.reverse` behält seine gewöhnliche Form, da es sich in der Mitte der Kette befindet. `join` kommt zuletzt, also kann es den Doppelpunkt verwenden und `'-'` genau so übergeben, wie es `join('-')` tun würde.

1. Die umgekehrte Liste `c, b, a` wird dann mit Bindestrichen verbunden, was `c-b-a` ergibt. Die Doppelpunkt-Form funktioniert mit gewöhnlichen Werten, nicht nur mit Blöcken.

{% include nav.html %}
