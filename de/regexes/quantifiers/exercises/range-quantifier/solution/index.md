---
title: 'Lösung: Zwei bis vier'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'abcdef' ~~ / \w ** 2..4 /;
```

🦋 Du findest den Quellcode in der Datei [range-quantifier.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/range-quantifier.raku).

## Ausgabe

```
｢abcd｣
```

## Kommentare

1. `\w ** 2..4` trifft zwei bis vier Wortzeichen.

1. Gierig wie es ist, nimmt es so viele, wie der Bereich erlaubt — vier —, der Treffer ist also `abcd`.

{% include nav.html %}
