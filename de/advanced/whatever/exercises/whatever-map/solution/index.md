---
title: 'Solution: Whatever mit map'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Den Quellcode findest du in der Datei [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Ausgabe

```
(3 6 9 12)
```

## Kommentare

1. `* * 3` ist ein Whatever-Ausdruck, der zu einem `WhateverCode` mit einem Argument wird — ein ganz gewöhnlicher Funktionswert, der in `$triple` gespeichert wird.

1. Da es einfach eine Funktion ist, akzeptiert `map` sie wie jeden Block und wendet sie auf jedes Element von `1..4` an, was `(3 6 9 12)` ergibt.

{% include nav.html %}
