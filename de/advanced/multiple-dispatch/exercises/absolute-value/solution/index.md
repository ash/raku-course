---
title: 'Solution: Absolutwert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Den Quellcode finden Sie in der Datei [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Ausgabe

```
7
4
```

## Kommentare

1. Der erste Kandidat passt nur auf negative Zahlen und gibt den negierten Wert zurück, der positiv ist.

1. Jede andere Zahl — Null und die positiven — geht an den zweiten Kandidaten, der den Wert unverändert zurückgibt.

{% include nav.html %}
