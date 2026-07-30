---
title: 'Lösung: Produkt einer Liste'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say [*] 1..6;
```

🦋 Du findest den Quellcode in der Datei [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Ausgabe

```
720
```

## Kommentare

1. `[*]` setzt `*` zwischen jedes Element des Bereichs und multipliziert sie alle.

1. `1 * 2 * 3 * 4 * 5 * 6` ist `720` — dasselbe wie die Fakultät von `6`.

{% include nav.html %}
