---
title: 'Solution: Potenzturm'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 2 ** 2 ** 3;
```

🦋 Den Quellcode finden Sie in der Datei [power-tower.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/power-tower.raku).

## Ausgabe

```
256
```

## Kommentare

1. Da `**` rechtsassoziativ ist, gruppiert sich der Ausdruck als `2 ** (2 ** 3)`.

1. Das ergibt `2 ** 8`, also `256` — nicht `(2 ** 2) ** 3`, was `64` wäre.

{% include nav.html %}
