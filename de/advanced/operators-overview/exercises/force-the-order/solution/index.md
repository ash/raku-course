---
title: 'Solution: Reihenfolge erzwingen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 2 ** (3 + 1);
```

🦋 Den Quellcode finden Sie in der Datei [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Ausgabe

```
16
```

## Kommentare

1. Ohne die Klammern würde `**` stärker binden als `+`, was `(2 ** 3) + 1 = 9` ergäbe.

1. Die Klammern erhöhen den Vorrang der Addition, sodass `3 + 1` zuerst berechnet wird und der Ausdruck zu `2 ** 4` wird, was `16` ergibt. Klammern erlauben es Ihnen immer, den Standardvorrang zu überschreiben.

{% include nav.html %}
