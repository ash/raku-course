---
title: 'Solution: Wie viele Ziffern'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say (2 ** 1000).chars;
```

🦋 Du findest den Quellcode in der Datei [big-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/big-factorial.raku).

## Ausgabe

```
302
```

## Kommentare

1. `2 ** 1000` wird exakt berechnet: Raku rundet den Wert nicht und laeuft nicht über, weil ganze Zahlen beliebige Genauigkeit haben.

1. `chars` ist normalerweise eine String-Methode, aber wenn man sie auf eine ganze Zahl anwendet, wird die Zahl zuerst in ihren Dezimaltext umgewandelt und dann werden die Zeichen gezählt. Da es hier weder ein Minuszeichen noch einen Dezimalpunkt gibt, entspricht die Zeichenanzahl genau der Anzahl der Ziffern -- `302`.

{% include nav.html %}
