---
title: 'Solution: Eine Zahl erzwingen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @a = 1, 2, 3;
say +@a;
```

🦋 Du findest den Quellcode in der Datei [force-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/contexts/force-a-number.raku).

## Ausgabe

```
3
```

## Kommentare

1. Der Präfix `+` erzwingt den numerischen Kontext.

1. Im numerischen Kontext wird ein Array zu seiner Elementanzahl, sodass das Ergebnis `3` ist.

{% include nav.html %}
