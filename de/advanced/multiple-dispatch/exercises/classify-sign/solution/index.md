---
title: 'Solution: Die Größe klassifizieren'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Den Quellcode finden Sie in der Datei [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Ausgabe

```
small
medium
large
```

## Kommentare

1. Alle drei Kandidaten nehmen ein einzelnes `Int` entgegen, sodass sie ohne die `where`-Klauseln kollidieren würden. Die Bedingungen bei den ersten beiden machen sie unterscheidbar, und der dritte ist der Auffangfall.

1. Die `where`-Klauseln prüfen `$n.abs`, sodass allein der Betrag das Ergebnis bestimmt und das Vorzeichen ignoriert wird. `size(7)` passt zum ersten Kandidaten (`small`), während `size(-250)` einen Absolutwert von `250` hat, der beide Bedingungen nicht erfüllt und zum Auffangfall (`large`) durchfällt.

1. Die Kandidaten werden vom spezifischsten zum allgemeinsten geprüft — genau in der Reihenfolge, in der sie hier geschrieben sind.

{% include nav.html %}
