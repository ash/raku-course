---
title: 'Lösung: Potenz'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub power($base, $exp) {
    $exp == 0 ?? 1 !! $base * power($base, $exp - 1);
}

say power(2, 10);
```

🦋 Du findest den Quellcode in der Datei [power.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/power.raku).

## Ausgabe

```
1024
```

## Kommentare

1. Der Grundfall liefert `1`, wenn der Exponent `0` erreicht, denn jede Basis hoch null ist eins.

1. Der rekursive Schritt multipliziert `$base` mit `power($base, $exp - 1)` und schält so jedes Mal einen Faktor ab. `power(2, 10)` multipliziert also zehn `2` miteinander, was `1024` ergibt.

{% include nav.html %}
