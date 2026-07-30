---
title: 'Lösung: Weicher Kehrwert'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 Du findest den Quellcode in der Datei [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Ausgabe

```
0.25
undefined
```

## Kommentare

1. `reciprocal(4)` liefert ganz normal `1 / 4`, also `0.25`.

1. `reciprocal(0)` ruft `fail` auf und liefert daher ein `Failure`, das undefiniert ist. Der Operator `//` liefert seine rechte Seite, sobald die linke undefiniert ist, wir erhalten also den Ersatzwert `undefined`.

1. `//` zu verwenden gilt als Behandeln des Fehlschlags: Es prüft auf Definiertheit, ohne den Wert zu verwenden, das `Failure` bleibt also weich und wird nie als echte Ausnahme geworfen.

{% include nav.html %}
