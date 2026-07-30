---
title: 'Solution: Prozent-von-Operator'
---

{% include menu.html %}

Hier ist eine mögliche Lösung.

## Code

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Du findest den Quellcode in der Datei [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Ausgabe

```
30
```

## Kommentare

1. Der Operator nimmt den Prozentsatz `$p` als linken Operanden und den Gesamtbetrag `$whole` als rechten Operanden.

1. Das Multiplizieren von `$whole` mit `$p` und Teilen durch `100` ergibt den gewünschten Anteil: `150 * 20 / 100` ist `30`.

{% include nav.html %}
