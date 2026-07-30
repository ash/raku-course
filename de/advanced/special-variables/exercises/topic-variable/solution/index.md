---
title: 'Solution: Die Themenvariable'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Du findest den Quellcode in der Datei [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Ausgabe

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Kommentare

1. Eine `for`-Schleife setzt die Topic-Variable `$_` der Reihe nach auf jedes Element, sodass der Block dreimal ausgeführt wird, wobei `$_` gleich `'apple'`, dann `'fig'`, dann `'cherry'` ist.

1. Innerhalb der Zeichenkette interpoliert `$_` das aktuelle Wort, und der Aufruf mit führendem Punkt `.chars` — kurz für `$_.chars` — gibt die Länge an. Beide beziehen sich auf dasselbe Topic, weshalb die Zahl immer zum Wort in der Zeile passt.

{% include nav.html %}
